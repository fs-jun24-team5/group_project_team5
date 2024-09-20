import React, { useEffect, useState } from 'react';
import styles from './PhonesPage.module.scss';
import { ProductsMain } from '../../components/ProductsMain/ProductsMain';
import { Link } from 'react-router-dom';
import { RoutesPathes } from '../../utils/RoutesPathes';
import { useParams } from 'react-router-dom';
import { getPhones } from '../../api/api';
import { ProductTypeExtended } from '../../api/type/ProductTypeExtended';
import { ItemDescription } from '../../components/ItemDescription/ItemDescription';
import { Loader } from '../../components/Loader';
import { ProductCategories } from '../../utils/ProductCategories';

export const PhonesPage: React.FC = () => {
  const { phonesId } = useParams<{ phonesId: string }>();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedButton, setSelectedButton] = useState<string>('');
  const [selectedImg, setSelectedImg] = useState<string>('');
  const [phone, setPhone1] = useState<ProductTypeExtended[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const linkClassName = phonesId ? styles.pageNameActive : styles.pageName;

  useEffect(() => {
    setIsLoading(true);
    getPhones()
      .then((productsFromServer) => {
        const neededProduct = productsFromServer.filter((phone) => phone.id === phonesId);
        neededProduct.map((phone) => {
          const name = phone.color;
          setSelectedColor(name);
          const capacity = phone.capacity;
          setSelectedButton(capacity);
          const img = phone.images[0];
          setSelectedImg(img);
        });
        setPhone1(neededProduct);
      })
      .finally(() => setIsLoading(false));
  }, [phonesId]);

  return (
    <>
      {phonesId ? (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {phone.map((phone) => (
                <main key={phone.id} className={styles.main}>
                  <div className={styles.main__content}>
                    <ItemDescription
                      phone={phone}
                      selectedColor={selectedColor}
                      selectedButton={selectedButton}
                      selectedImg={selectedImg}
                      setSelectedColor={setSelectedColor}
                      setSelectedButton={setSelectedButton}
                      setSelectedImg={setSelectedImg}
                    />
                  </div>
                </main>
              ))}
            </>
          )}
        </>
      ) : (
        <div className={styles.pagesContainer}>
          <div className={styles.route}>
            <Link to={RoutesPathes.HOME} className={styles.home}></Link>
            <i className={styles.arrow}></i>
            <Link to={RoutesPathes.PHONES} className={linkClassName}>
              Phones
            </Link>
            {phonesId && (
              <>
                <i className={styles.arrow}></i>
                <p className={styles.pageName}>{phonesId}</p>
              </>
            )}
          </div>
          <ProductsMain pageLabel="Phones" productsCategory={ProductCategories.PHONES} />
        </div>
      )}
    </>
  );
};
