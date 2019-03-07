export default {
    randomString,
};

function randomString(length = 11)
{
    if (!Number.isInteger(length))
    {
        throw new TypeError('The length of the string must be an integer');
    }
    const charArray = [];
    if (length <= 11)
    {
        charArray.push(...Math.random().toString(36).slice(2, 2 + length));
    }
    else
    {
        const generateTime = Math.floor(length / 10);
        const restLength = length - 10 * generateTime;
        for (let i = 0; i < generateTime; i++)
        {
            charArray.push(...Math.random().toString(36).slice(2));
        }
        charArray.push(...Math.random().toString(36).slice(2, 2 + restLength));
    }
    return charArray.join('');
}