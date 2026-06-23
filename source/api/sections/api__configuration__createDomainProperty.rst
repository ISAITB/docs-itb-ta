The **createDomainProperty** operation is used to define a new domain property. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/domain``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the domain property, of which the ``key`` and ``value`` are mandatory as defined
in the payload's :ref:`schema <api__configuration__createDomainProperty__request>`. In case the target domain cannot be determined by the community
linked to the provided ``ITB-API-KEY``, you also need to specify the ``domain`` property, set with the API key of the target domain.

The following example shows how you can create a domain property with the provided data:

.. code-block:: json

  {
    "key": "validationService",
    "value": "http://test-services/services/validation?wsdl",
    "description": "The WSDL address of the validation service used in test cases."
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createDomainProperty__request:

createDomainProperty - request schema
+++++++++++++++++++++++++++++++++++++

The payload of the **createDomainProperty** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-createDomainProperty_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/createDomainProperty_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createDomainProperty operation request payload",
       "type": "object",
       "properties": {
           "key": {
               "description": "The unique key used to identify the parameter.",
               "type": "string"
           },
           "value": {
               "description": "The value to apply for the parameter.",
               "type": "string"
           },
           "description": {
               "description": "The parameter's description.",
               "type": "string"
           },
           "inTests": {
               "description": "Whether the parameter should be exposed to test sessions.",
               "type": "boolean",
               "default": true
           },
           "domain": {
               "description": "The API key identifying the domain of the parameter. This is required if the community API key used for authentication refers to a community that is not linked to a specific domain.",
               "type": "string"
           }
       },
       "required": [
           "key",
           "value"
       ],
       "additionalProperties": false
     }
