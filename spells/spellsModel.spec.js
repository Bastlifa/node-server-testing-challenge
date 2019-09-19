const Spells = require('./spellsModel')
const db = require('../database/dbConfig')

describe('spells', () =>
{
    beforeEach(async () =>
    {
        await db('spells').truncate()
    })

    describe('insert a spell', () =>
    {
        it('inserts a spell', async () =>
        {
            const spellToAdd =
            {
                name: 'Alohamora',
                description: 'Levitates things slowly',
                subject: 'Charms'
            }
            const [id] = await Spells.add(spellToAdd)
    
            let spell = await db('spells').where({id}).first()
    
            expect(spell).toEqual({...spellToAdd, id: id})
        })

        it('makes the spells table longer', async () =>
        {
            const spellToAdd1 =
            {
                name: 'Alohamora',
                description: 'Levitates things slowly',
                subject: 'Charms'
            }
            const spellToAdd2 =
            {
                name: 'Langlock',
                description: 'Glues the target\'s tongue to the roof of their mouth',
                subject: 'Charms'
            }
            const spellToAdd3 =
            {
                name: 'Engorgio',
                description: 'Enlarges the target',
                subject: 'Transmutation'
            }

            await Spells.add(spellToAdd1)
            await Spells.add(spellToAdd2)
            await Spells.add(spellToAdd3)
            
            let spells = await db('spells')

            expect(spells).toHaveLength(3)
        })
    
    })

    describe('delete a spell', () =>
    {
        it('deletes an inserted spell', async () =>
        {
            const spellToAdd =
            {
                name: 'Alohamora',
                description: 'Levitates things slowly',
                subject: 'Charms'
            }
            const [id] = await Spells.add(spellToAdd)
    
            
    
            await Spells.remove(id)
            let allSpells = await Spells.find()
            expect(allSpells).toHaveLength(0)
        })

        it('deletes an specific spell by id', async () =>
        {
            const spellToAdd1 =
            {
                name: 'Alohamora',
                description: 'Levitates things slowly',
                subject: 'Charms'
            }
            const spellToAdd2 =
            {
                name: 'Langlock',
                description: 'Glues the target\'s tongue to the roof of their mouth',
                subject: 'Charms'
            }
            const spellToAdd3 =
            {
                name: 'Engorgio',
                description: 'Enlarges the target',
                subject: 'Transmutation'
            }
            await Spells.add(spellToAdd1)
            await Spells.add(spellToAdd2)
            await Spells.add(spellToAdd3)
    
            
    
            await Spells.remove(2)
            let removedSpell = await Spells.findById(2)

            expect(removedSpell).toBeFalsy()
        })
    
    })
})