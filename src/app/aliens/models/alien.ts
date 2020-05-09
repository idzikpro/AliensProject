export interface Alien {
  id: number;
  breed: string;
  rank: string;  // commander,leader,engineer, medic, navigator, soldier, terrorist
  timeUnits: number;
  health: number;
  energy: number;
  reactions: number;
  strength: number;
  bravery: number;
  firingAccuracy: number;
  throwingAccuracy: number;
  psiSkill: number;
  psiStrength: number;
  meleeAccuracy: number;
  armourFront: number;
  armourLeft: number;
  armourRight: number;
  armourRear: number;
  armourUnder: number;
  energyRecovery: number;
  victoryPoints: number;
  aggression: number;
  intelligence: number;
  heightStanding: number;
  heightKneeling: number;
}
