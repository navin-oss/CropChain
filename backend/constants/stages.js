/**
 * Shared Stage Enum Constants
 * 
 * This is the single source of truth for all stage values across the application.
 * Used by:
 * - Mongoose models (Batch.js)
 * - Joi validations (batchSchema.js)
 * - Any other stage-related logic
 * 
 * All stages are lowercase to ensure consistency.
 * Mongoose models should use lowercase: true to normalize input.
 */

const STAGES = ['farmer', 'mandi', 'transport', 'retailer'];

/**
 * Get stages as a comma-separated string for error messages
 * @returns {string}
 */
const getStagesString = () => STAGES.join(', ');

/**
 * Check if a value is a valid stage
 * @param {string} value 
 * @returns {boolean}
 */
const isValidStage = (value) => STAGES.includes(value?.toLowerCase());

/**
 * Normalize a stage value to lowercase
 * @param {string} value 
 * @returns {string}
 */
const normalizeStage = (value) => value?.toLowerCase();

module.exports = STAGES;
module.exports.STAGES = STAGES;
module.exports.getStagesString = getStagesString;
module.exports.isValidStage = isValidStage;
module.exports.normalizeStage = normalizeStage;
