import { rows } from '../config/db';

//WORKS
export function all() {
    return rows('GetCategories');
}