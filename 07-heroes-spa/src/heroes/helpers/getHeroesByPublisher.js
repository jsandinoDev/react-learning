import { heroes } from '../data/heroes';


export const getHeroesByPublishers = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    if ( !validPublishers.includes(publisher)){
        throw new Error('Error')
    }
    const filter = heroes.filter ( hero => hero.publisher === publisher );

    return filter;
}