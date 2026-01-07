import { writable } from "svelte/store";
import { browser } from "$app/environment";

type Theme = 'light' | 'dark';

const initial: Theme =
    browser && localStorage.getItem('theme') == 'light'
        ? 'dark'
        : 'light';

export const theme = writable<Theme>(initial);

theme.subscribe((value) => {
    if (!browser) return;
    localStorage.setItem('theme', value);
    document.documentElement.classList.toggle('dark', value === 'dark');
    
});
