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

  event.remove({mod: 'waystones'})
  event.remove({output: 'charm_glowball'})
  event.remove({output: 'betternether:cincinnasite_pickaxe_diamond'})


  event.shaped(item.of('betterend:infusion_pedestal', 1), [
    'ABA',
    'AEA',
    'GGG'
    ], {
    G: 'gobber2:gobber2_ingot_end',
    E: 'heartbond:ender_heart',
    B: 'mcda:upgrade_core_glut',
    A: 'minecraft:air'
  })

  event.shaped(item.of('origins:orb_of_origin', 1), [
    'ABC',
    'DEF',
    'GHI'
    ], {
    A: 'mcdw:item_bee_stinger',
    B: 'minecraft:scute',
    C: 'alaskanativecraft:dry_fish',
    D: 'mcda:fox_pelt',
    E: 'gobber2:gobber2_goo_nether',
    F: 'minecraft:rabbit_foot',
    G: 'untitledduckmod:duck_feather',
    H: 'mcda:goat_pelt',
    I: 'alaskanativecraft:antler'
  })



})

events.listen('item.tags', event => {
  // Change item tags here
})