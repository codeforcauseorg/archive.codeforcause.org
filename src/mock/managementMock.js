import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/management/customers').reply(200, {
  customers: [
    {
      id: '5e887a62195cc5aef7e8ca5d',
      name: 'Ekaterina Tankova',
      email: 'ekaterina.tankova@devias.io',
      avatar: '/static/images/avatars/avatar_2.png',
      spent: '500.00',
      currency: '$',
      orders: 1,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      location: 'West Virginia, USA'
    },
    {
      id: '5e887ac47eed253091be10cb',
      name: 'Cao Yu',
      email: 'cao.yu@devias.io',
      avatar: '/static/images/avatars/avatar_3.png',
      spent: '300.00',
      currency: '$',
      orders: 3,
      isProspect: false,
      isReturning: true,
      acceptsMarketing: true,
      updatedAt: moment()
        .subtract(1, 'days')
        .subtract(7, 'hours')
        .toDate()
        .getTime(),
      location: 'Bristow'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      name: 'Alex Richardson',
      email: 'alex.richardson@devias.io',
      avatar: '/static/images/avatars/avatar_4.png',
      spent: '0.00',
      currency: '$',
      orders: 0,
      isProspect: true,
      isReturning: false,
      acceptsMarketing: true,
      updatedAt: moment()
        .subtract(2, 'days')
        .subtract(1, 'hours')
        .toDate()
        .getTime(),
      location: 'Georgia, USA'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      name: 'Anje Keizer',
      email: 'anje.keizer@devias.io',
      avatar: '/static/images/avatars/avatar_5.png',
      spent: '5,600.00',
      currency: '$',
      orders: 6,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(2, 'days')
        .subtract(4, 'hours')
        .toDate()
        .getTime(),
      location: 'Ohio, USA'
    },
    {
      id: '5e86809283e28b96d2d38537',
      name: 'Katarina Smith',
      email: 'katarina.smith@devias.io',
      avatar: '/static/images/avatars/avatar_6.png',
      spent: '500.00',
      currency: '$',
      orders: 1,
      isProspect: false,
      isReturning: true,
      acceptsMarketing: true,
      updatedAt: moment()
        .subtract(2, 'days')
        .subtract(11, 'hours')
        .toDate()
        .getTime(),
      location: 'Texas, USA'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      name: 'Adam Denisov',
      email: 'adam.denisov@devias.io',
      avatar: '/static/images/avatars/avatar_7.png',
      spent: '0.00',
      currency: '$',
      orders: 0,
      isProspect: true,
      isReturning: false,
      acceptsMarketing: true,
      updatedAt: moment()
        .subtract(3, 'days')
        .subtract(7, 'hours')
        .toDate()
        .getTime(),
      location: 'California, USA'
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      name: 'Miller Edwards',
      email: 'miller.edwards@devias.io',
      avatar: '/static/images/avatars/avatar_8.png',
      spent: '0.00',
      currency: '$',
      orders: 0,
      isProspect: true,
      isReturning: false,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(4, 'days')
        .subtract(5, 'hours')
        .toDate()
        .getTime(),
      location: 'California, USA'
    },
    {
      id: '5e887d0b3d090c1b8f162003',
      name: 'Emilee Simchenko',
      email: 'emilee.simchenko@devias.io',
      avatar: '/static/images/avatars/avatar_9.png',
      spent: '100.00',
      currency: '$',
      orders: 4,
      isProspect: false,
      isReturning: false,
      acceptsMarketing: true,
      updatedAt: moment()
        .subtract(4, 'days')
        .subtract(15, 'hours')
        .toDate()
        .getTime(),
      location: 'Nevada, USA'
    },
    {
      id: '5e88792be2d4cfb4bf0971d9',
      name: 'Elliott Stone',
      email: 'elliott.stone@devias.io',
      avatar: '/static/images/avatars/avatar_10.png',
      spent: '1,000.00',
      currency: '$',
      orders: 2,
      isProspect: false,
      isReturning: true,
      acceptsMarketing: true,
      updatedAt: moment()
        .subtract(5, 'days')
        .subtract(2, 'hours')
        .toDate()
        .getTime(),
      location: 'Michigan, USA'
    },
    {
      id: '5e8877da9a65442b11551975',
      name: 'Shen Zhi',
      email: 'shen.zhi@devias.io',
      avatar: '/static/images/avatars/avatar_11.png',
      spent: '0.00',
      orders: 0,
      isProspect: true,
      isReturning: false,
      acceptsMarketing: true,
      updatedAt: moment()
        .subtract(6, 'days')
        .subtract(8, 'hours')
        .toDate()
        .getTime(),
      location: 'Utah, USA'
    },
    {
      id: '5e8680e60cba5019c5ca6fda',
      name: 'Merrile Burgett',
      email: 'merrile.burgett@devias.io',
      avatar: '/static/images/avatars/avatar_12.png',
      spent: '200.00',
      currency: '$',
      orders: 7,
      isProspect: false,
      isReturning: true,
      acceptsMarketing: false,
      updatedAt: moment()
        .subtract(9, 'days')
        .subtract(1, 'hours')
        .toDate()
        .getTime(),
      location: 'Utah, USA'
    }
  ]
});

mock.onGet('/api/management/customers/1').reply(200, {
  customer: {
    fullName: 'Ekaterina Tankova',
    email: 'ekaterina@devias.io',
    phone: '+55 748 327 439',
    state: 'Alabama',
    country: 'United States',
    zipCode: '240355',
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    creditCard: '4142 **** **** **** ****',
    autoCC: false,
    verified: true,
    currency: '$',
    vat: 19,
    balance: 0
  }
});

mock.onGet('/api/management/customers/1/emails').reply(200, {
  emails: [
    {
      id: uuidv4(),
      description: 'Order confirmation',
      createdAt: moment()
        .subtract(3, 'days')
        .subtract(5, 'hours')
        .subtract(34, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      description: 'Order confirmation',
      createdAt: moment()
        .subtract(4, 'days')
        .subtract(11, 'hours')
        .subtract(49, 'minutes')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/management/customers/1/invoices').reply(200, {
  invoices: [
    {
      id: uuidv4(),
      date: moment()
        .toDate()
        .getTime(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    },
    {
      id: uuidv4(),
      date: moment()
        .toDate()
        .getTime(),
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      paymentMethod: 'Credit Card',
      value: '5.25',
      currency: '$',
      status: 'paid'
    }
  ]
});

mock.onGet('/api/management/customers/1/logs').reply(200, {
  logs: [
    {
      id: uuidv4(),
      status: 200,
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 522,
      error: 'Invalid credit card',
      method: 'POST',
      route: '/api/purchase',
      desc: 'Purchase',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'DELETE',
      route: '/api/products/d65654e/remove',
      desc: 'Cart remove',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(8, 'minutes')
        .subtract(23, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products/d65654e/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(20, 'minutes')
        .subtract(54, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f/add',
      desc: 'Cart add',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(34, 'minutes')
        .subtract(16, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products/c85727f',
      desc: 'View product',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(54, 'minutes')
        .subtract(30, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'GET',
      route: '/api/products',
      desc: 'Get products',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(56, 'minutes')
        .subtract(40, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      status: 200,
      method: 'POST',
      route: '/api/login',
      desc: 'Login',
      IP: '84.234.243.42',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(57, 'minutes')
        .subtract(5, 'seconds')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/management/products').reply(200, {
  products: [
    {
      id: uuidv4(),
      name: 'Charlie Tulip Dress',
      image: '',
      isAvailable: true,
      isShippable: false,
      inventoryType: 'in_stock',
      quantity: 85,
      variants: 2,
      category: 'dress',
      attributes: ['Cotton'],
      price: 23.99,
      currency: '$',
      createdAt: moment()
        .subtract(1, 'days')
        .toDate()
        .getTime(),
      updatedAt: moment()
        .subtract(6, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      name: 'Kate Leopard Dress',
      image: '',
      isAvailable: false,
      isShippable: true,
      inventoryType: 'out_of_stock',
      quantity: 0,
      variants: 1,
      category: 'dress',
      attributes: ['Cotton'],
      price: 95.00,
      currency: '$',
      createdAt: moment()
        .subtract(3, 'days')
        .toDate()
        .getTime(),
      updatedAt: moment()
        .subtract(2, 'days')
        .subtract(8, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      name: 'Layering Bracelets Collection',
      image: '',
      isAvailable: true,
      isShippable: false,
      inventoryType: 'in_stock',
      quantity: 48,
      variants: 5,
      category: 'jewelry',
      attributes: ['Variety of styles'],
      price: 155.00,
      currency: '$',
      createdAt: moment()
        .subtract(6, 'days')
        .toDate()
        .getTime(),
      updatedAt: moment()
        .subtract(1, 'days')
        .subtract(2, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      name: 'Flared Sleeve Floral Blouse',
      image: '',
      isAvailable: false,
      isShippable: true,
      inventoryType: 'limited',
      quantity: 5,
      variants: 1,
      category: 'blouse',
      attributes: ['Polyester and Spandex'],
      price: 17.99,
      currency: '$',
      createdAt: moment()
        .subtract(12, 'days')
        .toDate()
        .getTime(),
      updatedAt: moment()
        .subtract(1, 'days')
        .subtract(7, 'hours')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/management/orders').reply(200, {
  orders: [
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(10, 'minutes')
        .toDate()
        .getTime(),
      customer: {
        name: 'Ekaterina Tankova'
      },
      payment: {
        ref: 'FAD103',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(32, 'minutes')
        .subtract(23, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Cao Yu'
      },
      payment: {
        ref: 'FAD102',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(36, 'minutes')
        .subtract(51, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Alex Richardson'
      },
      payment: {
        ref: 'FAD101',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(38, 'minutes')
        .subtract(55, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Anje Keizer'
      },
      payment: {
        ref: 'FAD100',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(40, 'minutes')
        .subtract(3, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Clarke Gillebert'
      },
      payment: {
        ref: 'FAD99',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      createdAt: moment()
        .subtract(45, 'minutes')
        .subtract(32, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Adam Denisov'
      },
      payment: {
        ref: 'FAD98',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(48, 'minutes')
        .subtract(57, 'seconds').toDate()
        .getTime(),
      customer: {
        id: '5e887a1fbefd7938eea9c981',
        name: 'Miller Edwards',
        avatar: '/static/images/avatars/avatar_8.png'
      },
      payment: {
        ref: 'FAD97',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'pending'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(49, 'minutes')
        .subtract(4, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Emilee Simchenko'
      },
      payment: {
        ref: 'FAD96',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'completed'
      },
      status: 'active'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(57, 'minutes')
        .subtract(43, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Elliott Stone'
      },
      payment: {
        ref: 'FAD95',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'rejected'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(59, 'minutes')
        .subtract(6, 'seconds').toDate()
        .getTime(),
      customer: {
        name: 'Shen Zhi'
      },
      payment: {
        ref: 'FAD94',
        method: 'CreditCard',
        total: '500.00',
        currency: '$',
        status: 'canceled'
      },
      status: 'inactive'
    },
    {
      id: uuidv4(),
      createdAt: moment()
        .subtract(1, 'hour')
        .subtract(15, 'minutes')
        .subtract(43, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        name: 'Merrile Burgett'
      },
      payment: {
        ref: 'FAD93',
        method: 'PayPal',
        total: '500.00',
        currency: '$',
        status: 'canceled'
      },
      status: 'inactive'
    }
  ]
});

mock.onGet('/api/management/orders/1').reply(200, {
  order: {
    id: uuidv4(),
    ref: 'FAD107',
    promoCode: null,
    value: '55.25',
    currency: '$',
    status: 'canceled',
    customer: {
      name: 'Ekaterina Tankova',
      address: 'Street King William, 42456',
      city: 'Montgomery',
      country: 'United States'
    },
    items: [
      {
        id: uuidv4(),
        name: 'Project Points',
        cuantity: 25,
        billing: 'monthly',
        status: 'completed',
        value: '50.25',
        currency: '$'
      },
      {
        id: uuidv4(),
        name: 'Freelancer Subscription',
        cuantity: 1,
        billing: 'monthly',
        status: 'completed',
        value: '5.00',
        currency: '$'
      }
    ],
    createdAt: moment()
      .toDate()
      .getTime()
  }
});

mock.onGet('/api/management/invoices').reply(200, {
  invoices: [
    {
      id: '28382843',
      currency: '$',
      amount: 65.28,
      status: 'paid',
      createdAt: moment()
        .subtract(1, 'hours')
        .toDate()
        .getTime(),
      customer: {
        name: 'Ana Henisky',
        email: 'contact@anahenisky.io'
      }
    },
    {
      id: '28382845',
      currency: '$',
      amount: 253.76,
      status: 'pending',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(5, 'hours')
        .toDate()
        .getTime(),
      customer: {
        name: 'Matt Jason',
        email: 'sales@matt-jason.com'
      }
    },
    {
      id: '28382345',
      currency: '$',
      amount: 781.50,
      status: 'canceled',
      createdAt: moment()
        .subtract(6, 'days')
        .subtract(4, 'hours')
        .toDate()
        .getTime(),
      customer: {
        name: 'Terry Thomas',
        email: 'support@terrythomas.io'
      }
    },
    {
      id: '283823653',
      currency: '$',
      amount: 96.64,
      status: 'paid',
      createdAt: moment()
        .subtract(15, 'days')
        .subtract(2, 'hours')
        .toDate()
        .getTime(),
      customer: {
        name: 'Triv Shopper',
        email: 'contact@triv-shopper.co.uk'
      }
    }
  ]
});

mock.onGet('/api/management/invoices/1').reply(200, {
  invoice: {
    id: '765ed153',
    dueDate: moment()
      .toDate()
      .getTime(),
    issueDate: moment()
      .add(15, 'days')
      .toDate()
      .getTime(),
    ref: 'DEV-9483',
    customer: {
      name: 'Tracey Herman',
      company: 'Countdown Grey Lynn',
      taxId: '6934656584231',
      address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand'
    },
    products: [
      {
        id: uuidv4(),
        desc: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
        value: '55.50'
      }
    ],
    subtotal: '50.00',
    taxes: '5.50',
    total: '55.50',
    currency: '$',
    createdAt: moment()
      .toDate()
      .getTime()
  }
});
