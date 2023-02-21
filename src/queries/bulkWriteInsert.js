import { faker } from '@faker-js/faker';

const bulkWriteInsert = async (collection, numberToInsert) => {
    const params = [];

    for (let i = 0; i < numberToInsert; i++) {
        params.push({
            insertOne: {
                document: {
                    name: faker.name.fullName(),
                    age: Math.floor(Math.random()* (90 - 18 + 1) + 18)
                }
            }
        })
    }

    console.log(JSON.stringify(params));

    const result = await collection.bulkWrite(params);

    console.log(result);

    return result;
};

export default bulkWriteInsert;
