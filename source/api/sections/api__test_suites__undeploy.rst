The **undeploy** operation is used to remove a test suite from a specification. Removing a test suite will result in the relevant conformance testing
history being cleared.

To call the **undeploy** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/undeploy``. To authorise the operation and identify the specification domain
from which the test suite will be removed, you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's payload you will need to define the following two properties:

* The ``specification``, referring to the API key of the specification to be updated.
* The ``testSuite``, referring to the identifier of the test suite to be removed.

The following sample is a request to remove a test suite from a specification.

.. code-block:: json

  {
    "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "testSuite": "test_suite_1"
  }

Once this call is made, the Test Bed will remove the specified test suite and clear any related conformance tests. The response to the **undeploy** operation has an
empty body and is returned with a ``200`` (OK) status code.

.. _api__test_suites__undeploy__request:

undeploy - request schema
+++++++++++++++++++++++++

The payload of the **undeploy** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-undeploy_request.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/undeploy_request",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the test suites' undeploy operation request payload",
     "type": "object",
     "properties": {
       "specification": {
         "description": "The API key value to uniquely identify the specification from which the test suite will be undeployed from.",
         "type": "string"
       },
       "testSuite": {
         "description": "The identifier of the test suite that will be undeployed.",
         "type": "string"
       }
     },
     "required": [
       "specification",
       "testSuite"
     ],
     "additionalProperties": false
   }
