import { getIn } from '../src/tools'

describe('Tool工具函数测试集合', () => {
  describe('Tool[getIn]测试', () => {
    const target = {
      name: 'test',
      people: {
        number: 5000,
        class: ['红', '黄', '黑']
      }
    }
    const people = target.people
    it('获取对象制定path的值', () => {
      const name: string = getIn<string>(target, ['name'], '')
      const peo: object = getIn<object>(target, ['people'], {})
      expect(name).toEqual('test')
      expect(peo).toEqual(people)
    })
  })
})
