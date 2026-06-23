The **deployShared** operation is used to add a new or updated test suite to a domain to be shared across multiple specifications. Apart from providing the test suite itself, the operation's
parameters allow you to specify how to handle validation issues and existing conformance tests.

To call the **deployShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/deployShared``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's payload you will need to define at least the ``testSuite``, including the data of the test suite archive being deployed. 
Apart from this, you may optionally specify additional properties as boolean flags to determine archive handling options. Specifically:

* Set ``ignoreWarnings`` to ``true`` to allow the test suite's deployment even in case of validation warnings. By default validation warnings will prevent the deployment
  from completing.
* Set ``replaceTestHistory`` to ``true`` to clear any existing conformance testing history relevant to the test suite. By default existing tests are maintained.
* Set ``updateSpecification`` to ``true`` to update existing test suite metadata to values provided in the test suite archive. By default existing information will not
  be updated.

In addition to the above properties, you may also specify an array named ``testCases`` that provides fine-grained instructions on how to handle the test suite's
test cases if these are found to already exist. For test cases not specified in this way, or if the ``testCases`` array is altogether missing, the values provided
in ``replaceTestHistory`` and ``updateSpecification`` are treated as the defaults. The items of the ``testCases`` array define the following properties:

* ``identifier``, referring to the identifier of the test case.
* ``updateSpecification``, which can be set to ``true`` to update the test case's metadata (name and description).
* ``replaceTestHistory``, which can be set to ``true`` to reset the testing history for the test case.

The **deployShared** operation actually comes with two variants to allow you to provide the test suite archive in the way that best fits your needs. The selected
approach is determined by you by setting the request's ``Content-Type`` header to match the type of submission you are making. Specifically:

* Setting ``Content-Type`` to ``application/json`` will consider that the request's body is JSON that includes the test suite archive as a **BASE64 encoded string**.
  The request's inputs in this case are added as JSON properties with the BASE64 encoded string added as property ``testSuite``.
* Setting ``Content-Type`` to ``multipart/form-data`` will consider the request as a **multipart form submission**. The request's inputs in this case will be 
  request parameters with the test suite archive named ``testSuite`` (the request's file part). In addition, the ``testCases`` array is replaced in this case
  by four repeatable parameters named ``testCaseWithSpecificationUpdate``, ``testCaseWithoutSpecificationUpdate``, ``testCaseWithTestHistoryReplacement``
  and ``testCaseWithoutTestHistoryReplacement``, each set with the relevant test case identifier.

The approach to follow depends on the client tool you want to use to make the calls. When submitting as JSON you will need to always calculate the BASE64 string of the test suite archive before
including it in the payload. In contrast, if you make a multipart form submission, your tool should be able to correctly construct a multipart request with the relevant part
boundaries. If you use a tool such as ``curl`` that handles this, the multipart form approach is likely simpler as you can simply point to the archive's file to submit without
using additional tools to generate BASE64 strings.

The following sample is a JSON request to deploy a shared test suite (the test suite's BASE64 encoded string is truncated for brevity).

.. code-block:: json

  {
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

As discussed earlier you may also include additional flags to determine how the upload should be handled. The following example includes the
``ignoreWarnings``, ``replaceTestHistory`` and ``updateSpecification`` flags to override the default behaviours.

.. code-block:: json

  {
    "ignoreWarnings": true,
    "replaceTestHistory": true,
    "updateSpecification": true,
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

For the full specification of the **deployShared** operation's request payload, when this is provided as JSON, you may check its :ref:`JSON schema definition<api__test_suites__deployShared__request>`.

Once the **deployShared** operation has completed you receive a JSON response to notify you of the deployment's result. This response will always include 
a boolean ``completed`` flag to inform you whether the deployment was actually carried out. Alongside this you may optionally receive report items
produced by the test suite's validation in three arrays named ``errors``, ``warnings`` and ``messages``. Each item of these arrays includes the finding's ``description``
and ``location``, the latter being the path of the test suite's resource (e.g. a test case file) that resulted in it being reported. A test suite's
deployment may not be completed in case it's validation produced errors or warnings (that were not set to be ignored via the request's ``ignoreWarnings`` flag).

Besides the overall status and validation summary, the response will also include the **API keys** of all data created, or affects by the test suite. These keys allow 
you to automate other operations related to this test suite through the REST API, such as :ref:`running test sessions <api__test_sessions__start>` or
:ref:`managing conformance statements <api__conformance_statements>`. The returned API keys include:

* The **identifier** of the **test suite** that was created or updated as a result of the operation.
* The **identifiers** of **test cases** that form the latest version of the test suite.
* The **names** and **identifiers** of the **specifications** linked to the shared test suite.
* The **names** and **identifiers** of the test suite **actors**.

The following example presents a response that produced a validation warning but was nonetheless completed:

.. code-block:: json

  {
    "completed": true,
    "warnings": [
      {
        "description": "[TDL-015] Actor [Actor2] is not referenced in any test cases."
      }
    ],
    "identifiers": {
        "testSuite": "testSuite1",
        "testCases": [ "testCase1", "testCase2", "testCase3" ],
        "specifications": [
          {
            "name": "Specification 1",
            "identifier": "77040396X168EX40CDXBD3FX62347E1A09E6",
            "actors": [
              { 
                "name": "Actor 1",
                "identifier": "28E6E6C9X80BDX40C9XB54DX102800BC32D7"
              },
              { 
                "name": "Actor 2",
                "identifier": "4F5E9DEBX1F5DX4ECBX92DBXC5DEF1035643"
              }
            ]
          }
        ]
      }
  }

For the full specification of the **deployShared** operation's response payload you may check its :ref:`JSON schema definition<api__test_suites__deployShared__response>`.

.. _api__test_suites__deployShared__request:

deployShared - request schema (JSON case)
+++++++++++++++++++++++++++++++++++++++++

The payload of the **deployShared** operation's request (in the case it submitted as JSON content) is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-deployShared_request.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/deployShared_request",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the test suites' deployShared operation request payload",
     "type": "object",
     "properties": {
       "testSuite": {
         "description": "The shared test suite archive to deploy provided as a Base64-encoded string.",
         "type": "string",
         "format": "base64"
       },
       "testCases": {
         "description": "Update choices for specific test cases.",
         "type": "array",
         "items": {
           "$ref": "#/definitions/testCaseDeploymentAction"
         }
       },
       "ignoreWarnings": {
         "description": "Whether test suite validation warnings should be ignored.",
         "type": "boolean",
         "default": false
       },
       "replaceTestHistory": {
         "description": "Whether the test history linked to the test suite's test cases should be reset. This is the default setting to consider if no test case specific options are defined.",
         "type": "boolean",
         "default": false
       },
       "updateSpecification": {
         "description": "Whether the test suite's metadata should be updated using the provided test suite's content.",
         "type": "boolean",
         "default": false
       }
     },
     "required": [ "testSuite" ],
     "additionalProperties": false,
     "definitions": {
       "testCaseDeploymentAction": {
         "description": "Deployment choices for a given test case.",
         "type": "object",
         "properties": {
           "identifier": {
             "description": "The test case identifier.",
             "type": "string"
           },
           "updateSpecification": {
             "description": "Whether the metadata for this test case should be updated.",
             "type": "boolean",
             "default": false
           },
           "replaceTestHistory": {
             "description": "Whether the testing history for this test case should be reset.",
             "type": "boolean",
             "default": false
           }
         }
       }
     }
   }

.. _api__test_suites__deployShared__response:

deployShared - response schema
++++++++++++++++++++++++++++++

The payload of the **deployShared** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-deploy_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/deploy_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the test suites' deploy operation response payload",
     "type": "object",
     "properties": {
       "completed": {
         "description": "Whether or not the deployment was completed.",
         "type": "boolean"
       },
       "errors": {
         "description": "The list of errors resulting from the test suite's validation.",
         "type": "array",
         "items": {
           "$ref": "#/definitions/testSuiteValidationReportItem"
         }
       },
       "warnings": {
         "description": "The list of warnings resulting from the test suite's validation.",
         "type": "array",
         "items": {
           "$ref": "#/definitions/testSuiteValidationReportItem"
         }
       },
       "messages": {
         "description": "The list of information messages resulting from the test suite's validation.",
         "type": "array",
         "items": {
           "$ref": "#/definitions/testSuiteValidationReportItem"
         }
       },
       "identifiers": {
         "description": "The API key identifiers linked to the test suite.",
         "type": "object",
         "required": [
           "testSuite"
         ],
         "properties": {
           "testSuite": {
             "description": "The test suite identifier.",
             "type": "string"
           },
           "testCases": {
             "description": "The identifiers of the test suite's test cases.",
             "type": "array",
             "items": {
               "type": "string"
             }
           },
           "specifications": {
             "description": "The identifiers linked to the test suite's linked specification(s).",
             "type": "array",
             "items": {
               "type": "object",
               "required": [
                 "name",
                 "identifier"
               ],
               "properties": {
                 "name": {
                   "description": "The specification's name.",
                   "type": "string"
                 },
                 "identifier": {
                   "description": "The specification's API key.",
                   "type": "string"
                 },
                 "actors": {
                   "description": "The information for the actors linked to the specification.",
                   "type": "array",
                   "items": {
                     "$ref": "#/definitions/testSuiteUploadActorKeys"
                   }
                 }
               }
             }
           }
         }
       }
     },
     "required": [
       "completed"
     ],
     "additionalProperties": false,
     "definitions": {
       "testSuiteValidationReportItem": {
         "description": "A test suite validation report finding.",
         "type": "object",
         "properties": {
           "description": {
             "description": "The finding's description.",
             "type": "string"
           },
           "location": {
             "description": "The path of the resource within the test suite that resulted in this finding.",
             "type": "string"
           }
         },
         "required": [
           "description"
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
