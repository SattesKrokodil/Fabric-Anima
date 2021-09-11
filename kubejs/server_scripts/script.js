// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

events.listen('recipes', event => {
  // Change recipes here
  event.remove({id: 'minecraft:tnt'})
  event.shapeless(item.of('minecraft:slime_ball', 1), ['minecraft:milk_bucket', 'minecraft:sugar', 'minecraft:wheat'])
  event.shapeless(item.of('minecraft:blaze_rod', 1), ['minecraft:gold_ingot', 'minecraft:stick', 'minecraft:nether_brick'])
  event.shapeless(item.of('minecraft:leather', 1), ['minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'])
  event.shapeless(item.of('minecraft:cobweb', 1), ['minecraft:string', 'minecraft:string', 'minecraft:string', 'minecraft:string', 'minecraft:string'])

  event.shapeless(item.of('porkchop', 1), ['minecraft:rotten_flesh', 'minecraft:sugar'])
  event.shapeless(item.of('chicken', 1), ['minecraft:rotten_flesh', 'minecraft:melon_seeds'])
  event.shapeless(item.of('beef', 1), ['minecraft:rotten_flesh', 'minecraft:wheat_seeds'])
  event.shapeless(item.of('minecraft:phantom_membrane', 3), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:leather'])
  event.shapeless(item.of('minecraft:egg', 1), ['minecraft:rotten_flesh', 'minecraft:slime_ball', 'minecraft:bone_meal'])


  event.shaped(item.of('minecraft:ghast_tear', 1), [
    'AAA',
    'ABA',
    'AAA'
    ], {
    A: 'minecraft:phantom_membrane',
    B: 'minecraft:diamond'

  })


  event.shaped(item.of('origins:orb_of_origin', 1), [
    'ABC',
    'DEF',
    'GHI'
    ], {
    A: 'mcdw:item_bee_stinger',
    B: 'minecraft:golden_carrot',
    C: 'minecraft:cod_bucket',
    D: 'minecraft:seagrass',
    E: 'minecraft:diamond',
    F: 'minecraft:ender_eye',
    G: 'minecraft:feather',
    H: 'blockus:rotten_flesh_block',
    I: 'minecraft:slime_ball'
  })


})

events.listen('item.tags', event => {
  // Change item tags here
})