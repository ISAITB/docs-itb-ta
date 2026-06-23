The **unlinkShared** operation is used to remove the link between a shared test suite and one or more specifications. Note that removing such a link has no effect
on existing test sessions but will remove the test suite from relevant conformance statements.

To call the **unlinkShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/unlinkShared``. To authorise the operation and identify the domain that
contains the test suite and specifications, you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's payload you will need to define the following two properties:

* The ``testSuite``, referring to the identifier of the test suite to be removed.
* The ``specifications`` array, including as string values the API keys of the target specifications.

The following sample is a request to unlink a test suite from a specification.

.. code-block:: json

  {
    "testSuite": "test_suite_1"
    "specifications": [ "B277E210X2FB4X4BD7X88B6X951504F45F8F" ]
  }

Once this call is made, the Test Bed will unlink the specified test suite from the specification(s). The response has an empty body and is returned with a ``200`` (OK) status code.

.. _api__test_suites__unlinkShared__request:

unlinkShared - request schema
+++++++++++++++++++++++++++++

The payload of the **unlinkShared** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-unlinkShared_request.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/unlinkShared_request",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the test suites' unlinkShared operation request payload",
     "type": "object",
     "properties": {
       "testSuite": {
         "description": "The identifier of the shared test suite.",
         "type": "string"
       },
       "specifications": {
         "description": "The list of specifications to unlink from the test suite (identified via their API keys).",
         "type": "array",
         "items": {
           "type": "string"
         }
       }
     },
     "required": [
       "testSuite",
       "specifications"
     ],
     "additionalProperties": false
   }
