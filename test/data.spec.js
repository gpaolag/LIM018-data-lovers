import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {orderAZ, orderZA, orderReciente, orderAntigua, newArrayPeople, peopleforMovie, SearchDirector} from '../src/data.js';

const pruebas=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986",
    "title": "Castle in the Sky"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004",
    "title": "Howl's Moving Castle"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001",
    "title": "Spirited Away"},
  {
    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995",
    "title": "Whisper of the Heart"},

  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988",
    "title": "My Neighbor Totoro"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989",
    "title": "Kiki's Delivery Service"}];

const ordAZ=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
  {
    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"}];

const ordZA=[
  {
    "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
  {
   "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"},
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"}];

const ordRec=[
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
    {
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"},  
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
  {
   "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
   {
     "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"}];

const ordAnt=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986","title": "Castle in the Sky"},
  {
    "id": "58611129-2dbc-4a81-a72f-77ddfc1b1b49","release_date": "1988","title": "My Neighbor Totoro"},
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e","release_date": "1989","title": "Kiki's Delivery Service"},
    {
      "id": "ff24da26-a969-4f0e-ba1e-a122ead6c6e3","release_date": "1995","title": "Whisper of the Heart"},
  {
    "id": "dc2e6bd1-8156-4886-adff-b39e6043af0c","release_date": "2001","title": "Spirited Away"},
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa","release_date": "2004","title": "Howl's Moving Castle"}];

describe('orderAZ()', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('returns `ordAZ`', () => {
    expect(orderAZ(pruebas)).toEqual(ordAZ);
  });
});

describe('orderReciente()', () => {
  it('is a function', () => {
    expect(typeof orderReciente).toBe('function');
  });

  it('returns `ordRec`', () => {
    expect(orderReciente(pruebas)).toEqual(ordRec);
  });
});

describe('orderZA()', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });

  it('returns `ordZA`', () => {
    expect(orderZA(pruebas)).toEqual(ordZA);
  });
});

describe('orderAntigua()', () => {
  it('is a function', () => {
    expect(typeof orderAntigua).toBe('function');
  });

  it('returns `ordAnt`', () => {
    expect(orderAntigua(pruebas)).toEqual(ordAnt);
  });
});

const pruebaPeople=[
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"}
      ]},
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe2",
    "title": "Castle in the Sky",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "specie": "Human"}
      ]}];

const resultPeople=[
  {
    "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
    "name": "Pazu",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
    "gender": "Male",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Brown",
    "specie": "Human"
  },{
    "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "name": "Lusheeta Toel Ul Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
    "gender": "Female",
    "age": "13",
    "eye_color": "Black",
    "hair_color": "Black",
    "specie": "Human"},
  {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
    }, {
      "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "name": "Lusheeta Toel Ul Laputa",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
      "gender": "Female",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Black",
      "specie": "Human"}
  ];

describe('newArrayPeople()', () => {
  it('is a function', () => {
    expect(typeof newArrayPeople).toBe('function');
  });

  it('returns `resultPeople`', () => {
    expect(newArrayPeople(pruebaPeople)).toEqual(resultPeople);
  });
});

const resultPeopleFilms2=[{
  "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
  "name": "Pazu",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
  "gender": "Male",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Brown",
  "specie": "Human"
},{
  "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
  "name": "Lusheeta Toel Ul Laputa",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg",
  "gender": "Female",
  "age": "13",
  "eye_color": "Black",
  "hair_color": "Black",
  "specie": "Human"}];

describe('peopleforMovie()', () => {
  it('is a function', () => {
    expect(typeof peopleforMovie).toBe('function');
  });

  it('returns `resultPeopleFilms`', () => {
    expect(peopleforMovie(pruebaPeople,"2baf70d1-42bb-4437-b551-e5fed5a87abe")).toEqual(resultPeopleFilms2);
})});

const directores =[
  {
    "id":"dir1",
    "name": "Hayao Miyazaki",
    "description": "Es uno de los fundadores de Studio Ghibli, junto con Isao Takahada. Dentro de sus ocupaciones encontramos director de cine de animación, animador, ilustrador, mangaka y productor de anime japonés de renombre. <br> Dentro de sus filmes de animación más populares podemos encontrar El viaje de Chihiro, Mi Vecino Totoro,  La princesa Mononoke y otros más.",
    "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg"
  },
  {
    "id":"dir2",
    "name": "Isao Takahata",
    "description": "Fue un director, escritor, productor y guionista japones. Fue, junto a Hayao Miyazaki fundador de Studio Ghibli. El cuento de la princesa Kaguya (2013), fue su última película, y la misma estuvo nominada en la categoría de mejor película de animación en los 87.º Premios Óscar.",
    "img": "http://pm1.narvii.com/6365/aad8c69e3a811ccabf0439a2a2a0fae70ebaebac_00.jpg"
  }];
const resultdirec=[{
  "id":"dir1",
  "name": "Hayao Miyazaki",
  "description": "Es uno de los fundadores de Studio Ghibli, junto con Isao Takahada. Dentro de sus ocupaciones encontramos director de cine de animación, animador, ilustrador, mangaka y productor de anime japonés de renombre. <br> Dentro de sus filmes de animación más populares podemos encontrar El viaje de Chihiro, Mi Vecino Totoro,  La princesa Mononoke y otros más.",
  "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg"
}
]

describe('searchDirectores()',()=>{
  it('is a function',()=>{
    expect(typeof SearchDirector).toBe('function');
  });
  it('returns `resultdirec`',()=>{
    expect(SearchDirector(directores,"Hayao Miyazaki")).toEqual(resultdirec);
  })
});