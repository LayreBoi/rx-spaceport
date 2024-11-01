import {Cargo, MaxLoadSizes, rndCargoType, rndMaxLoadSize, rndPlanet, Ship} from "../app/model/ship";
import * as _ from "lodash";
import * as numerals from "roman-numerals";
import { v4 as uuidv4 } from 'uuid';

export function generateShip(): Ship {
  let maxLoad = rndMaxLoadSize();
  return {
    id: uuidv4(),
    name: `${_.sample(names)} ${fifth() ? _.random(1, 22) : numerals.toRoman(_.random(1, 24))}.`,
    planet: rndPlanet(),
    maxLoad: maxLoad,
    cargoHold: generateCargo(maxLoad)
  }
}

function generateCargo(maxLoad: MaxLoadSizes): Cargo[] {
  const cargo: Cargo[] = [];
  let usedLoad = 0;
  while (usedLoad < maxLoad) {
    const size = (usedLoad % 4 === 0 && fifth())
      ? 4
      : (usedLoad % 4 < 3 && fifth())
        ? 2
        : 1;
    cargo.push({
      id: uuidv4(),
      type: rndCargoType(),
      size: size,
      broken: fifth()
    })
    usedLoad += size;
  }
  return cargo;
}

function fifth() {
  return Math.random() < 0.2;
}

const names = [
  'Achelois',
  'Achlys',
  'Aengus',
  'Aeolus',
  'Aether',
  'Agathodaemon',
  'Ahti',
  'Aion',
  'Ala',
  'Alastor',
  'Althea',
  'Anahit',
  'Ananke',
  'Anjea',
  'Aphrodite',
  'Apollo',
  'Apu',
  'Ares',
  'Aristaeus',
  'Artemis',
  'Asclepius',
  'Asteria',
  'Astghik',
  'Athena',
  'Atropos',
  'Aura',
  'Aurora',
  'Bacchus',
  'Barsamin',
  'Batara Sambu',
  'Benzaiten',
  'Boreas',
  'Brigid',
  'Brizo',
  'Calliope',
  'Cernunnos',
  'Ceto',
  'Chaos',
  'Chronos',
  'Circe',
  'Clio',
  'Coeus',
  'Concordia',
  'Coventina',
  'Crius',
  'Cronus',
  'Cupid',
  'Cybele',
  'Cyhirae',
  'Dagda',
  'Dalia',
  'Deeta',
  'Deimos',
  'Delia',
  'Demeter',
  'Dinlas',
  'Dionysus',
  'Doris',
  'Druantia',
  'Eachna',
  'Echo',
  'Eileithyia',
  'Electra',
  'Electryone',
  'Elpis',
  'Enyo',
  'Eos',
  'Epona',
  'Erebus',
  'Eris',
  'Eros',
  'Evaki',
  'Faunus',
  'Febris',
  'Flora',
  'Freya',
  'Gaia',
  'Gaol',
  'Hachiman',
  'Hades',
  'Harmonia',
  'Hebe',
  'Hecate',
  'Heka',
  'Hel',
  'Helios',
  'Hemera',
  'Hephaestus',
  'Hera',
  'Heracles',
  'Hermes',
  'Hesperus',
  'Hestia',
  'Hyperion',
  'Hypnos',
  'Iapetus',
  'Indra',
  'Inti',
  'Iris',
  'Izanami',
  'Jumala',
  'Juno',
  'Juventas',
  'Jüri',
  'Kali',
  'Khonsu',
  'Kianda',
  'Kratos',
  'Lakshmi',
  'Lugh',
  'Metis',
  'Mihr',
  'Minerva',
  'Mitra',
  'Mnemosyne',
  'Momus',
  'Morpheus',
  'Morrigan',
  'Nane',
  'Nemesis',
  'Nemty',
  'Neptune',
  'Nereus',
  'Nesoi',
  'Nike',
  'Notus',
  'Nuha',
  'Nyx',
  'Oceanus',
  'Osiris',
  'Ourea',
  'Oya',
  'Paean',
  'Pallas',
  'Pan',
  'Parvati',
  'Pheme',
  'Phoebe',
  'Pluto',
  'Plutus',
  'Pontus',
  'Poseidon',
  'Priapus',
  'Prometheus',
  'Pusan',
  'Ra',
  'Raijin',
  'Refafu',
  'Sabrina',
  'Sango',
  'Saraswati',
  'Savitr',
  'Sedna',
  'Selene',
  'Shiva',
  'Sobek',
  'Somnus',
  'Tartarus',
  'Tethys',
  'Thalassa',
  'Thalia',
  'Thanatos',
  'Theia',
  'Themis',
  'Triton',
  'Tursas',
  'Tyche',
  'Uranus',
  'Vanemuine',
  'Vesta',
  'Victoria',
  'Vishnu',
  'Vulcan',
  'Yemaya',
  'Zelus',
  'Zeus',
]
