'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReadingSchema extends Schema {
  up () {
    this.create('reading', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('reading')
  }
}

module.exports = ReadingSchema
