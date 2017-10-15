import {row, rows, empty } from '../config/db';

//WORKS
export function all() {
    return rows('GetAllPosts');
}
//WORKS
export function read(id: number) {
    return row('GetSinglePost', [id]);
}
//WORKS
export function update(id: number, title: string, content: string, categoryid: number) {
    return empty('UpdatePost', [id, title, content, categoryid]);
}
//WORKS
export function destroy(id: number) {
    return empty('DeletePost', [id]);
}
//WORKS
export function create(title: string, userid: number, categoryid: number, content: string) {
    return row('CreatePost', [title, userid, categoryid, content]);
}