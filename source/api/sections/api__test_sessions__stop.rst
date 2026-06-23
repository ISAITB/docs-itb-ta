The **stop** operation is used to forcibly terminate one or more specific test sessions. It can be used with any test session, not only
sessions launched via the Test Bed's REST API, as long as you are authorised to view them.

To call the **stop** operation make an HTTP ``POST`` to path ``/api/rest/tests/stop``. As with all Test Bed REST operations for session
management you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **organisation API key**.

In the request's payload you are expected to provide an array named ``session``, including the session identifiers for one or more test sessions
you want to stop. In the following example, a request is being made to terminate two test sessions:

.. code-block:: json

  {
    "session": ["08e49917-d560-4ffb-bbf5-280bf1084148", "a866297c-ccb0-4133-9ae9-2c3af7aba0bd"]
  }

Once this call is made, the Test Bed will immediately terminate the requested test sessions. The response to the **stop** operation has an
empty body and is returned with a ``200`` (OK) status code.

.. _api__test_sessions__stop__request:

stop - request schema
+++++++++++++++++++++

The payload of the **stop** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-stop_request.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/stop_request",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the tests' stop operation request payload",
     "type": "object",
     "properties": {
       "session": {
         "description": "The identifier(s) of the test session(s) to stop.",
         "type": "array",
         "items": {
           "description": "Test session identifier.",
           "type": "string"
         }
       }
     },
     "required": [
       "session"
     ],
     "additionalProperties": false
   }
