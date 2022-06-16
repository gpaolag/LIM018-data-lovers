import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import {orderAZ, orderZA, orderReciente, orderAntigua, newArrayPeople, peopleforMovie} from '../src/data.js';

const pruebas=[
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
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe","release_date": "1986",
    "title": "Castle in the Sky"},
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

describe('orderZA()', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });

  it('returns `ordZA`', () => {
    expect(orderZA(pruebas)).toEqual(ordZA);
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
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg"},
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg"}
      ]},
  {
    "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    "title": "Castle in the Sky",
    "people": [
      {
        "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
        "name": "Pazu",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg"},
      {
        "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
        "name": "Lusheeta Toel Ul Laputa",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg"}
      ]}];

const resultPeople=[
  {
  "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
  "name": "Pazu",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg"},
{
  "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
  "name": "Lusheeta Toel Ul Laputa",
  "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg"},
  {
    "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
    "name": "Pazu",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg"},
  {
    "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
    "name": "Lusheeta Toel Ul Laputa",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Sheeta.jpg"}];

describe('newArrayPeople()', () => {
  it('is a function', () => {
    expect(typeof newArrayPeople).toBe('function');
  });

  it('returns `ordAnt`', () => {
    expect(newArrayPeople(pruebaPeople)).toEqual(resultPeople);
  });
});


const peopleFilms=[
  {
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "people": [
      {
        "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
        "name": "Kiki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg"}
    ]}];
    

const resultPeopleFilms2=[{
    "id": "4151abc6-1a9e-4e6a-5678-aac05ra641js",
    "name": "Kiki",
    "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/59/Kiki.jpg"}
];

describe('peopleforMovie()', () => {
  it('is a function', () => {
    expect(typeof peopleforMovie).toBe('function');
  });

  it('returns `resultPeopleFilms`', () => {
if(peopleFilms.id=="ea660b10-85c4-4ae3-8a5f-41cea3648e3e"){
    expect(peopleforMovie(peopleFilms)).toEqual(resultPeopleFilms2);
}
})});
