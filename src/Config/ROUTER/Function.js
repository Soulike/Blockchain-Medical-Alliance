import Function from '../../Function';

function prefixFunctionGenerator(prefix)
{
    return url =>
    {
        url = Function.removePrependSlashes(url);
        return `/${prefix}/${url}`;
    };
}

export const accountPrefix = prefixFunctionGenerator('/account');

export const patientPrefix = prefixFunctionGenerator('/patient');