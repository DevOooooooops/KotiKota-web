/**
 * KotiKota
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: latest
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Configuration } from './configuration';
import { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestArgs, BaseAPI } from './base';
/**
 *
 * @export
 * @interface BadRequestException
 */
export interface BadRequestException {
    /**
     *
     * @type {string}
     * @memberof BadRequestException
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof BadRequestException
     */
    'message'?: string;
}
/**
 *
 * @export
 * @interface BankInfo
 */
export interface BankInfo {
    /**
     *
     * @type {number}
     * @memberof BankInfo
     */
    'amount'?: number;
}
/**
 *
 * @export
 * @interface CreateUser
 */
export interface CreateUser {
    /**
     *
     * @type {string}
     * @memberof CreateUser
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof CreateUser
     */
    'firebaseId'?: string;
}
/**
 *
 * @export
 * @interface Exception
 */
export interface Exception {
    /**
     *
     * @type {string}
     * @memberof Exception
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof Exception
     */
    'message'?: string;
}
/**
 *
 * @export
 * @interface InternalServerException
 */
export interface InternalServerException {
    /**
     *
     * @type {string}
     * @memberof InternalServerException
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof InternalServerException
     */
    'message'?: string;
}
/**
 *
 * @export
 * @interface Money
 */
export interface Money {
    /**
     *
     * @type {number}
     * @memberof Money
     */
    'amount'?: number;
}
/**
 *
 * @export
 * @interface NotAuthorizedException
 */
export interface NotAuthorizedException {
    /**
     *
     * @type {string}
     * @memberof NotAuthorizedException
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof NotAuthorizedException
     */
    'message'?: string;
}
/**
 *
 * @export
 * @interface Project
 */
export interface Project {
    /**
     *
     * @type {string}
     * @memberof Project
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    'description'?: string;
    /**
     *
     * @type {number}
     * @memberof Project
     */
    'targetAmount'?: number;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    'deadline'?: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    'ownerId'?: string;
    /**
     *
     * @type {ProjectStatus}
     * @memberof Project
     */
    'status'?: ProjectStatus;
    /**
     *
     * @type {ProjectHealth}
     * @memberof Project
     */
    'health'?: ProjectHealth;
}
/**
 *
 * @export
 * @enum {string}
 */
export declare enum ProjectHealth {
    SUCCESS = "SUCCESS",
    FAILED = "FAILED",
    IN_PROGRESS = "IN_PROGRESS"
}
/**
 *
 * @export
 * @enum {string}
 */
export declare enum ProjectStatus {
    OPEN = "OPEN",
    CLOSE = "CLOSE"
}
/**
 *
 * @export
 * @interface ResourceNotFoundException
 */
export interface ResourceNotFoundException {
    /**
     *
     * @type {string}
     * @memberof ResourceNotFoundException
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceNotFoundException
     */
    'message'?: string;
}
/**
 *
 * @export
 * @interface TooManyRequestsException
 */
export interface TooManyRequestsException {
    /**
     *
     * @type {string}
     * @memberof TooManyRequestsException
     */
    'type'?: string;
    /**
     *
     * @type {string}
     * @memberof TooManyRequestsException
     */
    'message'?: string;
}
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {UserProfile}
     * @memberof User
     */
    'profile'?: UserProfile;
    /**
     *
     * @type {BankInfo}
     * @memberof User
     */
    'bankInfo'?: BankInfo;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'id'?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    'firebaseId'?: string;
}
/**
 *
 * @export
 * @interface UserProfile
 */
export interface UserProfile {
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    'first_name'?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    'last_name'?: string;
    /**
     *
     * @type {string}
     * @memberof UserProfile
     */
    'email'?: string;
}
/**
 *
 * @export
 * @interface Whoami
 */
export interface Whoami {
    /**
     *
     * @type {User}
     * @memberof Whoami
     */
    'user'?: User;
}
/**
 * HealthApi - axios parameter creator
 * @export
 */
export declare const HealthApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    greet: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * HealthApi - functional programming interface
 * @export
 */
export declare const HealthApiFp: (configuration?: Configuration) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    greet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>>;
};
/**
 * HealthApi - factory interface
 * @export
 */
export declare const HealthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    greet(options?: any): AxiosPromise<string>;
};
/**
 * HealthApi - object-oriented interface
 * @export
 * @class HealthApi
 * @extends {BaseAPI}
 */
export declare class HealthApi extends BaseAPI {
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApi
     */
    greet(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<string>>;
}
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export declare const ProjectsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Create or update projects
     * @param {Array<Project>} [project]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    crupdateProjects: (project?: Array<Project>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get the list of all projects
     * @param {string} [ownerId] Filter projects by ownerId
     * @param {number} [page]
     * @param {number} [pageSize]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllProjects: (ownerId?: string, page?: number, pageSize?: number, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get a specific project by id
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectById: (projectId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ProjectsApi - functional programming interface
 * @export
 */
export declare const ProjectsApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Create or update projects
     * @param {Array<Project>} [project]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    crupdateProjects(project?: Array<Project>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Project>>>;
    /**
     *
     * @summary Get the list of all projects
     * @param {string} [ownerId] Filter projects by ownerId
     * @param {number} [page]
     * @param {number} [pageSize]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllProjects(ownerId?: string, page?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Project>>>;
    /**
     *
     * @summary Get a specific project by id
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectById(projectId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Project>>;
};
/**
 * ProjectsApi - factory interface
 * @export
 */
export declare const ProjectsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Create or update projects
     * @param {Array<Project>} [project]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    crupdateProjects(project?: Array<Project>, options?: any): AxiosPromise<Array<Project>>;
    /**
     *
     * @summary Get the list of all projects
     * @param {string} [ownerId] Filter projects by ownerId
     * @param {number} [page]
     * @param {number} [pageSize]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllProjects(ownerId?: string, page?: number, pageSize?: number, options?: any): AxiosPromise<Array<Project>>;
    /**
     *
     * @summary Get a specific project by id
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getProjectById(projectId: string, options?: any): AxiosPromise<Project>;
};
/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export declare class ProjectsApi extends BaseAPI {
    /**
     *
     * @summary Create or update projects
     * @param {Array<Project>} [project]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    crupdateProjects(project?: Array<Project>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Project[]>>;
    /**
     *
     * @summary Get the list of all projects
     * @param {string} [ownerId] Filter projects by ownerId
     * @param {number} [page]
     * @param {number} [pageSize]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    getAllProjects(ownerId?: string, page?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Project[]>>;
    /**
     *
     * @summary Get a specific project by id
     * @param {string} projectId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    getProjectById(projectId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Project>>;
}
/**
 * SecurityApi - axios parameter creator
 * @export
 */
export declare const SecurityApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * tells you who you are
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    whoami: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SecurityApi - functional programming interface
 * @export
 */
export declare const SecurityApiFp: (configuration?: Configuration) => {
    /**
     * tells you who you are
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    whoami(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Whoami>>;
};
/**
 * SecurityApi - factory interface
 * @export
 */
export declare const SecurityApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * tells you who you are
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    whoami(options?: any): AxiosPromise<Whoami>;
};
/**
 * SecurityApi - object-oriented interface
 * @export
 * @class SecurityApi
 * @extends {BaseAPI}
 */
export declare class SecurityApi extends BaseAPI {
    /**
     * tells you who you are
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApi
     */
    whoami(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<Whoami>>;
}
/**
 * UsersApi - axios parameter creator
 * @export
 */
export declare const UsersApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary CreateUser
     * @param {Array<CreateUser>} [createUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser: (createUser?: Array<CreateUser>, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary deposit a certain amount to your kotikota account
     * @param {string} userId
     * @param {Money} [money]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deposit: (userId: string, money?: Money, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary get all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllUsers: (options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary getUserById
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserById: (userId: string, options?: AxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary update user profile
     * @param {string} userId
     * @param {UserProfile} [userProfile]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserProfile: (userId: string, userProfile?: UserProfile, options?: AxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * UsersApi - functional programming interface
 * @export
 */
export declare const UsersApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary CreateUser
     * @param {Array<CreateUser>} [createUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser(createUser?: Array<CreateUser>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     *
     * @summary deposit a certain amount to your kotikota account
     * @param {string} userId
     * @param {Money} [money]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deposit(userId: string, money?: Money, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     *
     * @summary get all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<User>>>;
    /**
     *
     * @summary getUserById
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserById(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
    /**
     *
     * @summary update user profile
     * @param {string} userId
     * @param {UserProfile} [userProfile]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserProfile(userId: string, userProfile?: UserProfile, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>>;
};
/**
 * UsersApi - factory interface
 * @export
 */
export declare const UsersApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary CreateUser
     * @param {Array<CreateUser>} [createUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUser(createUser?: Array<CreateUser>, options?: any): AxiosPromise<User>;
    /**
     *
     * @summary deposit a certain amount to your kotikota account
     * @param {string} userId
     * @param {Money} [money]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deposit(userId: string, money?: Money, options?: any): AxiosPromise<User>;
    /**
     *
     * @summary get all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllUsers(options?: any): AxiosPromise<Array<User>>;
    /**
     *
     * @summary getUserById
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserById(userId: string, options?: any): AxiosPromise<User>;
    /**
     *
     * @summary update user profile
     * @param {string} userId
     * @param {UserProfile} [userProfile]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserProfile(userId: string, userProfile?: UserProfile, options?: any): AxiosPromise<User>;
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export declare class UsersApi extends BaseAPI {
    /**
     *
     * @summary CreateUser
     * @param {Array<CreateUser>} [createUser]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    createUser(createUser?: Array<CreateUser>, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User>>;
    /**
     *
     * @summary deposit a certain amount to your kotikota account
     * @param {string} userId
     * @param {Money} [money]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    deposit(userId: string, money?: Money, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User>>;
    /**
     *
     * @summary get all users
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getAllUsers(options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User[]>>;
    /**
     *
     * @summary getUserById
     * @param {string} userId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUserById(userId: string, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User>>;
    /**
     *
     * @summary update user profile
     * @param {string} userId
     * @param {UserProfile} [userProfile]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    updateUserProfile(userId: string, userProfile?: UserProfile, options?: AxiosRequestConfig): Promise<import("axios").AxiosResponse<User>>;
}