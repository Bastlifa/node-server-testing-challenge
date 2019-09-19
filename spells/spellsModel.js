const db = require('../database/dbConfig')


module.exports =
{
    add,
    remove,
    find,
    findById
}

function add(spell)
{
    return db('spells').insert(spell, 'id')
}

function remove(id)
{
    return db('spells').del().where({id})
}

function find()
{
    return db('spells')
}

function findById(id)
{
    return db('spells').where({id}).first()
}