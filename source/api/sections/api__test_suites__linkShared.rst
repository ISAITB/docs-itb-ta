The **linkShared** operation is used to link a shared test suite to one or more specifications.

To call the **linkShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/linkShared``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's payload you will need to define:

* The ``testSuite`` to link, referring to the test suite's identifier.
* The ``specifications`` array defining the specifications to link the test suite with.

Each entry of the ``specifications`` has two properties:

* The ``specification`` (required), referring to the API key of the specification.
* The ``update`` flag (optional), defining whether the metadata of the targeted specification (actor names, identifiers and descriptions)
  should be updated to match the information from the test suite (default is "false").

The following sample is a JSON request to link a shared test suite to a specification (the test suite's BASE64 encoded string is truncated for brevity).

.. code-block:: json

  {
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA==",
    "specifications": [
      {
        "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
      }
    ]
  }

For the full specification of the **linkShared** operation's request payload, you may check its :ref:`JSON schema definition<api__test_suites__linkShared__request>`.

Once the **linkShared** operation has completed you receive a JSON response to inform you of the result of the link. This response is an
array with one item per targetted specification that includes the following properties:

* ``specification``, with the API key of the relevant specification.
* ``linked``, a boolean flag that is "true" if the operation link was carried out.
* ``message``, that in case of a failed link includes an explanatory message.

The following example presents a response for a successful link:

.. code-block:: json

  [
    {
      "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
      "linked": true
    }
  ]

For the full specification of the **linkShared** operation's response payload you may check its :ref:`JSON schema definition<api__test_suites__linkShared__response>`.

.. _api__test_suites__linkShared__request:

linkShared - request schema
+++++++++++++++++++++++++++

The payload of the **linkShared** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-linkShared_request.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/linkShared_request",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the test suites' linkShared operation request payload",
     "type": "object",
     "properties": {
       "testSuite": {
         "description": "The identifier of the shared test suite.",
         "type": "string"
       },
       "specifications": {
         "description": "The list of specifications to link the test suite to.",
         "type": "array",
         "items": {
           "$ref": "#/definitions/testSuiteLinkRequestSpecification"
         }
       }
     },
     "required": [
       "testSuite",
       "specifications"
     ],
     "additionalProperties": false,
     "definitions": {
       "testSuiteLinkRequestSpecification": {
         "description": "Information on how to link a shared test suite to a given specification.",
         "type": "object",
         "properties": {
           "specification": {
             "description": "The API key identifying the specification to link the test suite to.",
             "type": "string"
           },
           "update": {
             "description": "Whether or not to update the specification's actor metadata based on the test suite.",
             "type": "boolean"
           }
         },
         "required": [
           "specification"
         ],
         "additionalProperties": false
       }
     }
   }

.. _api__test_suites__linkShared__response:

linkShared - response schema
++++++++++++++++++++++++++++

The payload of the **linkShared** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-linkShared_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/linkShared_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the test suites' linkShared operation response payload",
     "type": "array",
     "items": {
       "$ref": "#/definitions/testSuiteLinkResponseSpecification"
     },
     "definitions": {
       "testSuiteLinkResponseSpecification": {
         "description": "The result from linking a shared test suite to a given specification.",
         "type": "object",
         "properties": {
           "specification": {
             "description": "The API key identifying the specification.",
             "type": "string"
           },
           "linked": {
             "description": "Whether or not the test suite was linked to the specification.",
             "type": "boolean"
           },
           "message": {
             "description": "A message detailing why the specification was not linked (if linking didn't take place).",
             "type": "string"
           },
           "actors": {
             "description": "The information for the actors linked to the specification.",
             "type": "array",
             "items": {
               "$ref": "#/definitions/testSuiteUploadActorKeys"
             }
           }
         },
         "required": [
           "specification",
           "linked"
         ],
         "additionalProperties": false
       },
       "testSuiteUploadActorKeys": {
         "description": "The API keys for the actors related to the test suite.",
         "type": "object",
         "required": [
           "name",
           "identifier"
         ],
         "properties": {
           "name": {
             "description": "The name of the actor.",
             "type": "string"
           },
           "identifier": {
             "description": "The API key of the actor.",
             "type": "string"
           }
         }
       }
     }
   }
