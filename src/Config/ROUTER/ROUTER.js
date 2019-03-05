import {
    accountPrefix,
    hospitalProviderPrefix,
    insuranceCompanyPrefix,
    patientPrefix,
    serviceProviderPrefix,
} from './Function';
// 页面 View 从此导入
import {View as Login} from '../../Pages/Account/Login';
import {View as SignUp} from '../../Pages/Account/SignUp';

// 页面的 ID，目前设想用于识别当前所在页面。Value 必须从 0 开始且连续（考虑到以后可能的需求），值可以随意修改
export const PAGE_ID = {
    ACCOUNT: {
        LOGIN: 0,
        SIGN_UP: 1,
    },
    INSURANCE_COMPANY: {
        INSURANCE_COMPANY_INSURANCE_LIST: 2,
        INSURANCE_COMPANY_INSURANCE_PUBLICATION: 3,
        INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS: 4,
        INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL: 5,
        INSURANCE_COMPANY_DIRECT_PURCHASING_PROCESS: 6,
        INSURANCE_COMPANY_DIRECT_PURCHASING_DETAIL: 7,
        INSURANCE_COMPANY_INFORMATION_CENTER: 8,
        INSURANCE_COMPANY_INSURANCE_DETAIL: 9,
    },
};

// 并不存在页面的路由，为了正常跳转，需要进行特殊处理
export const REDIRECT_ROUTE = {
    ROOT: '/',
    ACCOUNT: accountPrefix(),
    INSURANCE_COMPANY: insuranceCompanyPrefix(),
    PATIENT: patientPrefix(),
    SERVICE_PROVIDER: serviceProviderPrefix(),
    HOSPITAL: hospitalProviderPrefix(),
};

// 页面的路由，用于在 React-Router 中使用
export const PAGE_ID_TO_ROUTE = {
    [PAGE_ID.ACCOUNT.LOGIN]: accountPrefix('/login'),
    [PAGE_ID.ACCOUNT.SIGN_UP]: accountPrefix('/signUp'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_LIST]: insuranceCompanyPrefix('/insuranceList'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_PUBLICATION]: insuranceCompanyPrefix('/insurancePublication'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]: insuranceCompanyPrefix('/directPaymentProcess'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL]: insuranceCompanyPrefix('/directPaymentDetail'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PURCHASING_PROCESS]: insuranceCompanyPrefix('/directPurchasingProcess'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PURCHASING_DETAIL]: insuranceCompanyPrefix('/directPurchasingDetail'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INFORMATION_CENTER]: insuranceCompanyPrefix('/informationCenter'),
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_DETAIL]: insuranceCompanyPrefix('/insuranceDetail'),
};

// 页面对应的组件
export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.ACCOUNT.LOGIN]: Login,
    [PAGE_ID.ACCOUNT.SIGN_UP]: SignUp,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_LIST]: null,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_PUBLICATION]: null,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PAYMENT_PROCESS]: null,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PAYMENT_DETAIL]: null,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PURCHASING_PROCESS]: null,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_DIRECT_PURCHASING_DETAIL]: null,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INFORMATION_CENTER]: null,
    [PAGE_ID.INSURANCE_COMPANY.INSURANCE_COMPANY_INSURANCE_DETAIL]: null,
};