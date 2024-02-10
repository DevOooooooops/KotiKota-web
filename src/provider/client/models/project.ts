/* tslint:disable */
/* eslint-disable */
/**
 * KotiKota
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: latest
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ProjectHealth } from './project-health';
import { ProjectStatus } from './project-status';
import { ProjectHealth, ProjectStatus } from '.';

/**
 *
 *
 * @export
 * @interface Project
 */
export interface Project {
  /**
   * @type {string}
   * @memberof Project
   */
  id?: string;

  /**
   * @type {string}
   * @memberof Project
   */
  name?: string;

  /**
   * @type {string}
   * @memberof Project
   */
  description?: string;

  /**
   * @type {number}
   * @memberof Project
   */
  targetAmount?: number;

  /**
   * @type {Date}
   * @memberof Project
   */
  deadline?: Date;

  /**
   * @type {string}
   * @memberof Project
   */
  ownerId?: string;

  /**
   * @type {ProjectStatus}
   * @memberof Project
   */
  status?: ProjectStatus;

  /**
   * @type {ProjectHealth}
   * @memberof Project
   */
  health?: ProjectHealth;
}