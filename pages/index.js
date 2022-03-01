import React, {useState, useEffect} from 'react';
import Head from 'next/head';

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Table from '@components/table/table';
import Dropdown from '@components/dropdown/dropdown';
import TABLE_DATA from '@constants/table-data.json';
import styles from './styles/Home.module.css'
import PRODUCTS from '@constants/products.json';
import MOLECULES from '@constants/molecules.json';
import FIELDS from '@constants/fields.json';
import PLATFORMS from '@constants/platforms.json';

export default function Home() {
  const [product, setProduct] = useState(null);
  const [molecule, setMolecule] = useState(null);
  const [platform, setPlatform] = useState(null);
  const [field, setField] = useState(null);

  const [products, setProducts] = useState(PRODUCTS.map(product => ({...product, isActive: true})));
  const [molecules, setMolecules] = useState(MOLECULES.map(molecule => ({...molecule, isActive: true})));
  const [platforms, setPlatforms] = useState(PLATFORMS.map(platform => ({...platform, isActive: true})));
  const [fields, setFields] = useState(FIELDS.map(field => ({...field, isActive: true})));

  const [tableData, setTableData] = useState(TABLE_DATA);

  useEffect(() => {
    let td = TABLE_DATA;

    if (product) {
      td = td.filter(data => data.product === product);
    }
    if (molecule) {
      td = td.filter(data => data.molecule === molecule);
    }
    if (platform) {
      td = td.filter(data => data.platform === platform);
    }
    if (field) {
      td = td.filter(data => data.field === field);
    }

    if (product || molecule || platform || field) {
      const availableFilters = td.reduce((result, data) => {
        result.products.add(data.product);
        result.molecules.add(data.molecule);
        result.platforms.add(data.platform);
        result.fields.add(data.field);
        return result;
      }, {
        products: new Set(),
        molecules: new Set(),
        platforms: new Set(),
        fields: new Set(),
      });

      setProducts(products.map(product => ({...product, isActive: availableFilters.products.has(product.key)})));
      setMolecules(molecules.map(molecule => ({...molecule, isActive: availableFilters.molecules.has(molecule.key)})));
      setPlatforms(platforms.map(platform => ({...platform, isActive: availableFilters.platforms.has(platform.key)})));
      setFields(fields.map(field => ({...field, isActive: availableFilters.fields.has(field.key)})));
    } else {
      setProducts(products.map(product => ({...product, isActive: true})));
      setMolecules(molecules.map(molecule => ({...molecule, isActive: true})));
      setPlatforms(platforms.map(platform => ({...platform, isActive: true})));
      setFields(fields.map(field => ({...field, isActive: true})));
    }

      setTableData(td);
    }, [product, molecule, platform, field]);


  return (
    <div>
      <Head>
        <title>Стадии разработки продуктов компании BIOCAD</title>
        <meta name="description" content="Шкала жизненного цикла продукта показывает на какой стадии разработки продукт находится в данный момент и в какой категории препаратов относится, является ли дженериком или биоаналогом"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header/>

      <main className={styles.main}>
        <div className={styles.filters}>
          <Dropdown defaultName={'Тип продукта'} value={product} elements={products} onChange={setProduct}/>
          <Dropdown defaultName={'Тип молекулы'} value={molecule} elements={molecules} onChange={setMolecule}/>
          <Dropdown defaultName={'Платформа'} value={platform} elements={platforms} onChange={setPlatform}/>
          <Dropdown defaultName={'Терапевтическая область'} value={field} elements={fields} onChange={setField}/>
        </div>
        <div className={styles.table}>
          <Table tableData={tableData}/>
        </div>
      </main>

      <Footer/>
    </div>
  )
}






