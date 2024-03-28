export const categoryIds = {
  index: 0,
  sport: 2,
  technologies: 1,
  fashion: 3,
}

export const categoryNames = {
  index: 'Главная',
  fashion: 'Мода',
  technologies: 'Технологии',
  sport: 'Спорт',

}

export const beautifyDate = (date: string): string => {
  return new Date(date).toLocaleDateString('ru-RU', {
    month: 'long',
    day: 'numeric'
  });
}