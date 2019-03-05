import Function from '../../Function';

function prefixFunctionGenerator(prefix)
{
    return url =>
    {
        if (url)
        {
            url = Function.removePrependSlashes(url);
            return `${prefix}/${url}`;
        }
        else
        {
            return `${prefix}`;
        }
    };
}

// 帐号相关前缀
export const accountPrefix = prefixFunctionGenerator('/account');

// 个人（患者）相关前缀
export const patientPrefix = prefixFunctionGenerator('/patient');

// 保险公司相关前缀
export const insuranceCompanyPrefix = prefixFunctionGenerator('/insuranceCompany');

// 第三方服务商相关前缀
export const serviceProviderPrefix = prefixFunctionGenerator('/serviceProvider');

// 医院相关前缀
export const hospitalProviderPrefix = prefixFunctionGenerator('/hospitalProvider');