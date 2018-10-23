import semver from 'semver';
import metadata from '../metadata';

const major = semver.major(metadata.version);
const minor = semver.minor(metadata.version);
const urlVersion = `${major}.${minor}`;
const baseUrl = 'https://www.elastic.co/';

export default {
  filebeat: {
    installation: `${baseUrl}guide/en/beats/filebeat/${urlVersion}/filebeat-installation.html`,
    configuration: `${baseUrl}guide/en/beats/filebeat/${urlVersion}/filebeat-configuration.html`,
    elasticsearchOutput: `${baseUrl}guide/en/beats/filebeat/${urlVersion}/elasticsearch-output.html`,
    startup: `${baseUrl}guide/en/beats/filebeat/${urlVersion}/filebeat-starting.html`,
    exportedFields: `${baseUrl}guide/en/beats/filebeat/${urlVersion}/exported-fields.html`
  },
  scriptedFields: {
    scriptFields: `${baseUrl}guide/en/elasticsearch/reference/${urlVersion}/search-request-script-fields.html`,
    scriptAggs: `${baseUrl}guide/en/elasticsearch/reference/${urlVersion}/search-aggregations.html#_values_source`,
    painless: `${baseUrl}guide/en/elasticsearch/reference/${urlVersion}/modules-scripting-painless.html`,
    painlessApi: `${baseUrl}guide/en/elasticsearch/painless/${urlVersion}/painless-api-reference.html`,
    painlessSyntax: `${baseUrl}guide/en/elasticsearch/reference/${urlVersion}/modules-scripting-painless-syntax.html`,
    luceneExpressions: `${baseUrl}guide/en/elasticsearch/reference/${urlVersion}/modules-scripting-expression.html`
  }
};