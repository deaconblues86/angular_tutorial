// Mocking this up which would one day come from the backend
import { Card } from './card'
import json from "./cards.json"

console.log(json);
export const CARDS: Card[] = json;