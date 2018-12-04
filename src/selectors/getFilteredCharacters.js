export const getFilteredCharacters = (characters, searchValue) => {
    const searchValueLowerCase = searchValue.toLowerCase();

    return characters.filter(({ name }) => name.toLowerCase().includes(searchValueLowerCase));
};;
