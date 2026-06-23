The **status** operation is used to check the progress of one or more specific test sessions. It can be used with any test session, not only
sessions launched via the Test Bed's REST API, as long as you are authorised to view them.

To call the **status** operation make an HTTP ``POST`` to path ``/api/rest/tests/status``. As with all Test Bed REST operations for session
management you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **organisation API key**.

.. note::
  **Using GET:** Prior to release 1.17.0 the **status** operation was available through HTTP ``GET``. This remains possible as an alternative
  to ``POST`` but is not part of the API's :ref:`OpenAPI documentation<api__openapi>` as ``GET`` requests are not supposed to
  have body content.

In the request's payload you may provide two properties to define your query:

* The ``session`` array, including one or more session identifiers to look up.
* The ``withLogs`` boolean flag to specify whether you want to view the detailed log trace for each returned session. By default log traces
  are not returned, but you can set this to ``true`` to include them.
* The ``withReports`` boolean flag to specify whether you want to also include the sessions' XML report expressed in the `GITB Test Reporting Language (GITB TRL) <https://github.com/ISAITB/gitb-types/blob/master/gitb-types-specs/src/main/resources/schema/gitb_tr.xsd>`__.
  By default reports are not included.

The following example call makes a query for one test session, choosing to also return its detailed log:

.. code-block:: json

  {
    "session": ["08e49917-d560-4ffb-bbf5-280bf1084148"],
    "withLogs": true
  }

As a response for the **status** operation, the Test Bed returns the latest information for the requested sessions in an array named ``sessions``.
This includes one item per reported session which includes in turn the following properties:

* ``session``, for the session's identifier.
* ``result``, one of "SUCCESS", "FAILURE" or "UNDEFINED" for the overall test status.
* ``startTime``, containing a timestamp for the session's launch time.

The above properties are included for all test sessions, active or completed. If a session is completed this information additionally includes the
following properties:

* ``endTime``, containing a timestamp of the session's completion time.
* ``message``, optionally included if an overall output message was produced by the test session.

In case detailed log traces were requested (i.e. property ``withLogs`` was included and set to ``true``), each test session will
also include a property named ``logs``. This is a string array containing one item per reported log message. Similarly, if
test session reports were requested (i.e. property ``withReports`` was included and set to ``true``), a further property named
``report`` will be included. This is a string value that includes the complete XML content of the report as a JSON-escaped string
.

The following example illustrates the status information returned for a single completed test session with logs and reports included:

.. code-block:: json

  {
    "sessions": [
      {
        "session": "08e49917-d560-4ffb-bbf5-280bf1084148",
        "result": "FAILURE",
        "startTime": "2022-03-17T13:28:16Z",
        "endTime": "2022-03-17T13:28:38Z",
        "message": "Your query did not have the expected type.",
        "logs": [
          "[2022-03-17 14:28:15] DEBUG - Configuring session [08e49917-d560-4ffb-bbf5-280bf1084148]",
          "[2022-03-17 14:28:15] INFO  - Starting session",
          "[2022-03-17 14:28:15] DEBUG - Status update - step [Query system] - ID [1]: PROCESSING",
          "[2022-03-17 14:28:15] DEBUG - Status update - step [Query system] - ID [1]: WAITING",
          "[2022-03-17 14:28:15] WARN  - Received 'receive' call from Test Bed",
          "[2022-03-17 14:28:37] DEBUG - Received notification",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Query system] - ID [1]: COMPLETED",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Response] - ID [2]: PROCESSING",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Response] - ID [2]: COMPLETED",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Sequence] - ID [3]: PROCESSING",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Verify the query type] - ID [3.1]: PROCESSING",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Verify the query type] - ID [3.1]: ERROR",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Sequence] - ID [3]: ERROR",
          "[2022-03-17 14:28:37] DEBUG - Status update - step [Call] - ID [3]: ERROR",
          "[2022-03-17 14:28:37] DEBUG - Preparing to stop",
          "[2022-03-17 14:28:38] INFO  - Session finished with result [ERROR]"
        ],
        "report": "<?xml version=\"1.0\"><TestCaseOverviewReport>...</TestCaseOverviewReport>"
      }
    ]
  }

.. _api__test_sessions__status__request:

status - request schema
+++++++++++++++++++++++

The payload of the **status** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-status_request.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/status_request",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the tests' status operation request payload",
     "type": "object",
     "properties": {
       "session": {
         "description": "The session identifier(s) to look up.",
         "type": "array",
         "items": {
           "type": "string"
         }
       },
       "withLogs": {
         "description": "Whether or not the log output for each session should be returned.",
         "type": "boolean",
         "default": false
       },
       "withReports": {
         "description": "Whether or not the XML test case report should be returned.",
         "type": "boolean",
         "default": false
       }
     },
     "additionalProperties": false,
     "required": [
       "session"
     ]
   }

.. _api__test_sessions__status__response:

status - response schema
++++++++++++++++++++++++

The payload of the **status** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-status_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/status_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the tests' status operation response payload",
     "type": "object",
     "properties": {
       "sessions": {
         "description": "The list of status information for retrieved test sessions.",
         "type": "array",
         "items": {
           "$ref": "#/definitions/sessionStatus"
         }
       }
     },
     "required": [
       "sessions"
     ],
     "additionalProperties": false,
     "definitions": {
       "sessionStatus": {
         "description": "Status information for a test session.",
         "type": "object",
         "properties": {
           "session": {
             "description": "The session's unique identifier.",
             "type": "string"
           },
           "result": {
             "description": "The session's result.",
             "type": "string",
             "enum": [
               "SUCCESS",
               "FAILURE",
               "UNDEFINED"
             ]
           },
           "startTime": {
             "description": "The session start time.",
             "type": "string",
             "format": "yyyy-MM-ddTHH:mm:ssZ"
           },
           "endTime": {
             "description": "The session end time (if the session is completed).",
             "type": "string",
             "format": "yyyy-MM-ddTHH:mm:ssZ"
           },
           "message": {
             "description": "The resulting output message of the session.",
             "type": "string"
           },
           "logs": {
             "description": "The list of log entries produced by the session.",
             "type": "array",
             "items": {
               "type": "string"
             }
           },
           "report": {
             "description": "The test session's XML report.",
             "type": "string"
           }
         },
         "required": [
           "session",
           "result",
           "startTime"
         ],
         "additionalProperties": false
       }
     }
   }
