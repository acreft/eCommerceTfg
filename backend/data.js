import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Alfredo',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Tempranillo Vino Tinto',
      slug: 'vino-tinto-tempranillo',
      category: 'Vinos',
      image: '/images/v1.png',
      price: 4,
      countInStock: 20,
      brand: 'D.O.P La Mancha',
      rating: 3.5,
      numReviews: 10,
      descripcion:
        'Esta es una uva tinta autóctona de España y es una de las variedades más comunes en La Mancha. Produce vinos tintos con cuerpo medio, sabores frutales y taninos suaves.',
      origen: 'Bodega Los Morados',
      certificaciones: 'D.O.P La Mancha',
    },
    {
      //  _id: '2',
      name: 'Vino Tinto Reserva',
      slug: 'vino-tinto-reserva',
      category: 'Vinos',
      image: '/images/v1.png',
      price: 30,
      countInStock: 20,
      brand: 'DO La Mancha',
      rating: 4.5,
      numReviews: 10,
      descripcion:
        'Sumérgete en la elegancia atemporal de nuestro tinto reserva, una obra maestra enológica que encarna la esencia misma del arte del envejecimiento. Con una profunda tonalidad rubí que destella con destellos carmesí.',
      origen: 'Viñedos Plaza del Agua',
      certificaciones: 'Trofeo de la Vendimia Dorada',
    },
    {
      //_id: '3',
      name: 'Vino Tinto Roble Selección',
      slug: 'vino-tinto-roble',
      category: 'Vinos',
      image: '/images/v1.png',
      price: 40,
      countInStock: 20,
      brand: 'DO La Mancha',
      rating: 5,
      numReviews: 10,
      descripcion:
        'Descubre la expresión vibrante y audaz de nuestro tinto roble seleccion, un vino que captura la esencia misma del vigor juvenil y la destreza artesanal. Con un color rojo cereza profundo y brillante, este vino despierta los sentidos con un bouquet aromático que fusiona notas frescas de frutas rojas maduras con delicados matices de vainilla y cacao, provenientes de su paso por barricas de roble.',
      origen: 'Bodega Río Riansares',
      certificaciones: 'Trofeo de la Vendimia Dorada',
    },
    {
      //_id: '4',
      name: 'Vino Tinto Graciano',
      slug: 'vino-tinto-graciano',
      category: 'Vinos',
      image: '/images/v1.png',
      price: 10,
      countInStock: 20,
      brand: 'DO La Mancha',
      rating: 4,
      numReviews: 10,
      descripcion:
        'Los vinos tintos Graciano son de colores muy intensos, de elevada acidez y con una alta carga tánica. Los vinos con uva Graciano se suelen utilizar para ensamblajes con otras variedades, aunque también para elaborar vinos monovarietales.',
      origen: 'Bodegas Santa Ana',
      certificaciones: 'Trofeo de la Vendimia Dorada',
    },
    {
      //_id: '5',
      name: 'Vino Tinto Syrah',
      slug: 'vino-tinto-syrah',
      category: 'Vinos',
      image: '/images/v1.png',
      price: 12,
      countInStock: 20,
      brand: 'DO La Mancha',
      rating: 4.5,
      numReviews: 10,
      descripcion:
        'También conocida como Shiraz en algunos lugares, la Syrah en La Mancha puede dar lugar a vinos tintos potentes con notas especiadas, a veces con toques de pimienta negra.',
      origen: 'Viñedos Eras Altas',
      certificaciones: 'Trofeo de la Vendimia Dorada',
    },
    {
      // _id: '6',
      name: 'Vino Tinto Cabernet Sauvignon',
      slug: 'vino-tinto-cabernet',
      category: 'Vinos',
      image: '/images/v1.png',
      price: 17,
      countInStock: 0,
      brand: 'DO La Mancha',
      rating: 4,
      numReviews: 10,
      descripcion:
        'Es un vino de alta intensidad organoléptica, donde dominan los frutos negros (mora, arándano, ciruela), acompañados de tonos balsámicos y un fondo mieloso. Los taninos están presentes dada la juventud del vino pero son maduros.',
      origen: 'Viñedos Pozo Viejo',
      certificaciones: 'Trofeo de la Vendimia Dorada',
    },
  ],
};
export default data;
