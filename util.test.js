const { createDictionary, deleteDictionary, createOrModifyEntry, getAllKeys, getValue } = require('./util.js');
// console.log(createDictionary());

//=======================================
//-------Testing Create Dictionary-------
//=======================================

describe('should create a dictionary', () => {
  test('should respond with a 201 status code', async () => {
    const createStatus = await createDictionary();
    expect(createStatus.status).toBe(201);
  });
  test('should return a new dictionary id', async () => {
    const getId = await createDictionary();
    expect(getId.data.id).toBeTruthy();
  });
  test('should return content-type of application/json', async () => {
    const contentType = await createDictionary();
    expect(contentType.headers['content-type']).toBe('application/json');
  })
});

//=======================================
//-------Testing Delete Dictionary-------
//=======================================

describe('should delete a dictionary', () => {


  test('')
  //Create dictionary and save id
  //Delete dictionary with saved id
  //Check if dictionary exists with getAllKeys with saved id
});
