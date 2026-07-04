// Sistema de Sombras Aliadas - Solo Leveling
// Gerencia o spawning de mobs eliminados como sombras aliadas

const SHADOW_TAG = 'shadow_ally';
const DEFEATED_MOBS_TAG = 'defeated_mobs';

/**
 * Registra um mob como derrotado
 * @param {Entity} mobType - Tipo do mob derrotado
 */
function registerDefeatedMob(mobType) {
  console.log(`[Solo Leveling] Mob registrado: ${mobType}`);
}

/**
 * Spawn uma sombra aliada de um mob previamente derrotado
 * @param {Entity} player - Jogador que está spawning a sombra
 * @param {String} mobType - Tipo do mob a spawnar
 */
function spawnShadowAlly(player, mobType) {
  console.log(`[Solo Leveling] Spawning shadow: ${mobType}`);
}

module.exports = {
  registerDefeatedMob,
  spawnShadowAlly,
  SHADOW_TAG,
  DEFEATED_MOBS_TAG
};
