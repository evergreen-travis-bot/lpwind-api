'use strict'

const should = require('should')
const {getItem, getItems} = require('../lib/mapper')

function getFixtures () {
  return [{
    'name': 'quatro sphere 85L (custom)',
    'image': 'http://www.lpwindsurf.com/wp-content/uploads/2017/04/DSC_0839-300x300.jpg',
    'link': 'http://www.lpwindsurf.com/shop/windsurf/quatro-sphere-85l-custom/',
    'oldPrice': '1.190,00€',
    'offerPrice': '1.090,00€'
  },
  {
    'name': 'Naish RN wave 82L  2015',
    'image': 'http://www.lpwindsurf.com/wp-content/uploads/2017/03/DSC_0803-300x300.jpg',
    'link': 'http://www.lpwindsurf.com/shop/windsurf/naish-rn-wave-82l-2015/',
    'price': '590,00€'
  }]
}

describe('lpwind-api » mapper', function () {
  describe('.getItem', function () {
    it('items without offer price', function () {
      const fixture = getFixtures()[0]
      const item = getItem(fixture)

      should(item).be.eql({
        'title': 'quatro sphere 85L (custom) €1090',
        'name': 'quatro sphere 85L (custom)',
        'image': 'http://www.lpwindsurf.com/wp-content/uploads/2017/04/DSC_0839-300x300.jpg',
        'link': 'http://www.lpwindsurf.com/shop/windsurf/quatro-sphere-85l-custom/',
        'price': 1090
      })
    })

    it('items with offer price', function () {
      const fixture = getFixtures()[1]
      const item = getItem(fixture)

      should(item).be.eql({
        'title': 'Naish RN wave 82L  2015 €590',
        'name': 'Naish RN wave 82L  2015',
        'image': 'http://www.lpwindsurf.com/wp-content/uploads/2017/03/DSC_0803-300x300.jpg',
        'link': 'http://www.lpwindsurf.com/shop/windsurf/naish-rn-wave-82l-2015/',
        'price': 590
      })
    })
  })

  describe('.getItems', function () {
    it('link, title, name, price and image are present', function () {
      const fixtures = getFixtures()
      const items = getItems(fixtures)

      should(items).be.eql([{
        'title': 'quatro sphere 85L (custom) €1090',
        'name': 'quatro sphere 85L (custom)',
        'image': 'http://www.lpwindsurf.com/wp-content/uploads/2017/04/DSC_0839-300x300.jpg',
        'link': 'http://www.lpwindsurf.com/shop/windsurf/quatro-sphere-85l-custom/',
        'price': 1090
      },
      {
        'title': 'Naish RN wave 82L  2015 €590',
        'name': 'Naish RN wave 82L  2015',
        'image': 'http://www.lpwindsurf.com/wp-content/uploads/2017/03/DSC_0803-300x300.jpg',
        'link': 'http://www.lpwindsurf.com/shop/windsurf/naish-rn-wave-82l-2015/',
        'price': 590
      }])
    })
  })
})
