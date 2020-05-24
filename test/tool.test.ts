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
    it('获取对象指定path的值', () => {
      const name: string = getIn<string>(target, ['name'], '')
      const peo: object = getIn<object>(target, ['people'], {})
      const color: string = getIn<string>(target, ['people', 'class', 1], '')
      expect(name).toBe('test')
      expect(peo).toEqual(people)
      expect(JSON.stringify(peo)).toEqual(JSON.stringify(people))
      expect(color).toEqual('黄')
    })
    it('源对象为null或者undefined，返回默认值', () => {
      const tragetNull = getIn<string>(null, ['nothing'], 'tragetNull')
      const targetUndefind = getIn<string>(undefined, ['nothing'], 'targetUndefind')
      expect(tragetNull).toBe('tragetNull')
      expect(targetUndefind).toBe('targetUndefind')
    })
    it('path数组为空返回默认值', () => {
      const lengthO = getIn<number>(target, [], 2)
      expect(lengthO).toBe(2)
    })
  })
})
