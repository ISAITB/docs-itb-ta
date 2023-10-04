.. _api:

REST API
========

The test bed's REST API allows you to carry out certain operations without connecting to its user interface. Its typical use case is to allow 
integration with automated processes enabling use cases such as **automated testing** and **continuous integration**. For 
test developers certain API operations may also be interesting as it allows them to more easily validate changes while **developing test cases**.

As a general note, identifying the operations' caller and referring to existing data in the test bed is done via **API keys**. For operations that would
involve choices and confirmations if done via their corresponding user interface screens, these are provided in each case as inputs of the relevant REST calls.

The REST API foresees the following types of operations:

* Launch and management of test sessions (see :ref:`api__test_sessions`).
* Management of test suites (see :ref:`api__test_suites`).

These sets of operations are documented in the sections that follow.

.. note::

  Using the test bed's REST API is an advanced feature that needs to first be enabled before it can be used. This is done
  by setting the `AUTOMATION_API_ENABLED`_ property to true in the test bed's configuration.

.. _api__test_sessions:

Test session management
-----------------------

Apart from launching tests through the user interface you may also launch, manage and report on test sessions using REST API calls. A typical scenario would 
be to do so as part of a development or quality assurance workflow that would involve the following steps:

1. Upon changes to your system, or at given intervals, deploy and initialise the latest version of your system.
2. Once your system is ready, use the test bed's REST API to launch a series of test sessions for your system.
3. Have your system proceed, via scripting or responding to test bed requests, to complete the launched test sessions.
4. Monitor the progress of the launched test sessions by periodically polling the test bed for updates.
5. Once all test sessions are complete, compile an overview report and shut down your system.

All test session management operations identify relevant data via API keys that are :ref:`managed as part of the organisation's details<manage_organisation__rest>`.
API keys are defined to cover the following information:

* **Organisation:** The key to identify the specific organisation for which test sessions will be launched or managed.
* **System:** The key to determine the system for which new test sessions are to be launched.
* **Actor:** The key to determine the target specification actor for which to test conformance. Recall that the combination of system and actor
  essentially define a :ref:`conformance statement<manage_your_conformance_statements>`.
* **Test suite:** The key to determine a specific test suite.
* **Test case:** The key to determine a specific test case.

Three operations are made available that allow you to launch, monitor and manage test sessions:

* :ref:`start<api__test_sessions__start>`: Launch one or more test sessions relevant to a given conformance statement.
* :ref:`status<api__test_sessions__status>`: Query the status of one or more test sessions.
* :ref:`stop<api__test_sessions__stop>`: Stop one or more test sessions.

All these operations are HTTP calls that include the following:

* A HTTP header named ``ITB_API_KEY`` set with the **organisation API key**. This header is required to authenticate the request.
* A **JSON payload** provided as the body of the request to determine the parameters of the requested action.

Details on each operation, including sample requests and responses, are provided in the following sections.

.. _api__test_sessions__start:

start
~~~~~

The **start** operation is used to launch one or more test sessions. You may use the operation's parameters to specify exactly which test cases
to execute, allowing for targetted choices or batch execution of complete sets of tests. You may also define how the selected test cases are 
launched, by specifying whether they should be parallelised or executed in sequence. In addition, you may provide inputs for the tests to execute
that could serve to replace values that would be otherwise provided interactively (e.g. user inputs or uploaded files).

To call the **start** operation make an HTTP ``POST`` to path ``/api/rest/tests/start``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/tests/start``.

As with all test bed REST operations for session management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

In the request's payload you will need to define at least the following properties:

* The ``system``, referring to the API key of the system to be tested.
* The ``actor``, referring to the API key for the target actor.

In addition to the above, you can include properties ``testSuite`` and ``testCase``, both arrays including the API keys for specific test suites
and test cases, which in combination with the ``actor`` define which test cases shall be executed.
For example the following request defines only the ``actor``, thus launching all test cases defined in the actor's 
:ref:`conformance statement<manage_your_conformance_statements__view_a_conformance_statements_details__tests>`:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7"
  }

Including in addition the ``testSuite`` property will instruct the test bed to launch the test cases defined in that specific test suite(s):

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "testSuite": [ "TS1" ]
  }

If you want to launch only one or more specific test cases you can use the ``testCase`` property:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "testCase": [ "TS1_TC1", "TS1_TC2" ]
  }

Apart from selecting the test cases to launch, you may also specify property ``forceSequentialExecution`` to inform the test bed how the
test sessions should be launched. Setting this to ``true`` will force the test bed to launch all tests sequentially. By default, this is
considered as ``false``, meaning that the test bed will launch all test sessions in parallel, unless certain of the selected test cases
require sequential execution.

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "forceSequentialExecution": true
  }

As a complement to the information on which tests are to be launched, you may also provide one or more **inputs** for the selected test cases.
These inputs will be added to the test session context before executing each test, overriding any variables defined with default values.
Providing inputs can be very useful allowing you to execute tests that would otherwise require user interactions (which in this case will be skipped).

The inputs provided can be done so in a flexible manner, defining each input (e.g. a text or even a file) once and mapping it to the test cases
for which it should be considered. To do this you use the ``inputMapping`` property, an array with one item per input, complemented by the
information on the test cases to apply it to. Regarding this test case mapping, you may specify property ``testSuite`` to map it to the tests
of certain test suites, property ``testCase`` to map it to certain test cases, or skip these altogether to apply it to all tests.

For example, the following request defines an input named "countryCode" that applies to all test cases, and a second input named "partyId" that
only applies to two specific ones:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "inputMapping": [
      { 
        "input": { 
          "name": "countryCode",
          "value": "BE" 
        } 
      },
      { 
        "testCase": ["TS1_TC1", "TS1_TC2"], 
        "input": {
          "name": "partyId",
          "value": "ID12345"
        }
      }
    ]    
  }

The definition of each ``input`` property is quite flexible, allowing you to define complete files as well as complex structures such as maps.
To define a file you would including its content as a Base64-encoded string, setting appropriately the ``embeddingMethod`` and ``type`` properties
on its relevant input:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "inputMapping": [
      {
        "testCase": ["TS1_TC1"],
        "input": { 
          "name": "aFile",
          "embeddingMethod": "BASE64",
          "type": "binary",
          "value": "ZGY6TEtNZmRzYSdrZ2ptZmdobDthZyBcb2VrZ2hhc......"
        } 
      }
    ]    
  }

When providing a map as an input you do so by including its entries within the top-level map input, in its ``item`` property:


.. code-block:: json

 {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "inputMapping": [
      { 
        "testCase": ["TS1_TC1"],
        "input": { 
          "name": "countryInfo",
          "type": "map",
          "item": [
            { "name": "countryCode", "value": "BE" },
            { "name": "countryName", "value": "Belgium" }
          ]
        } 
      }
    ]    
  }

For the full specification of the **start** operation's request payload you may check its :ref:`JSON schema definition<api__test_sessions__start__request>`.

The response you receive from the **start** operation, includes a confirmation of the test sessions that have been started or planned for execution
(if execution was requested to be sequential). The information for each scheduled session is returned in the ``createdSessions`` array, of which
each item corresponds to one session. For each session you are informed of its relevant ``testSuite`` and ``testCase``, as well as its assigned 
``session`` identifier with which you can follow its progress.

.. code-block:: json

  {
    "createdSessions": [
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC1",
        "session": "63b76ce6-5ade-431f-8620-8dadb13d2f42"
      },
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC2",
        "session": "a866297c-ccb0-4133-9ae9-2c3af7aba0bd"
      }
    ]
  }

You may use the reported session identifiers to check the sessions' :ref:`status<api__test_sessions__status>` and, if needed, forcibly :ref:`stop<api__test_sessions__stop>` them.

.. _api__test_sessions__start__request:

start - request schema
++++++++++++++++++++++

The payload of the **start** operation's request is defined by the following :download:`JSON Schema<resources/sessions/start_request.schema.json>`:

.. literalinclude:: resources/sessions/start_request.schema.json
   :language: json

.. _api__test_sessions__start__response:

start - response schema
+++++++++++++++++++++++

The payload of the **start** operation's response is defined by the following :download:`JSON Schema<resources/sessions/start_response.schema.json>`:

.. literalinclude:: resources/sessions/start_response.schema.json
   :language: json

.. _api__test_sessions__status:

status
~~~~~~

The **status** operation is used to check the progress of one or more specific test sessions. It can be used with any test session, not only
sessions launched via the test bed's REST API, as long as you are authorised to view them.

To call the **status** operation make an HTTP ``POST`` to path ``/api/rest/tests/status``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/tests/status``.

.. note::
  **Using GET:** Prior to release 1.17.0 the **status** operation was available through HTTP ``GET``. This remains possible as an alternative
  to ``POST`` but is not part of the API's :ref:`OpenAPI documentation<api__openapi>` as ``GET`` requests are not supposed to
  have body content.

As with all test bed REST operations for session management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

In the request's payload you may provide two properties to define your query:

* The ``session`` array, including one or more session identifiers to look up.
* The ``withLogs`` boolean flag to specify whether you want to view the detailed log trace for each returned session. By default log traces
  are not returned, but you can set this to ``true`` to include them.
* The ``withReports`` boolean flag to specify whether you want to also include the sessions' XML report expressed in the `GITB Test Reporting Language (GITB TRL) <https://www.itb.ec.europa.eu/docs/tdl/latest/introduction/index.html#specification-links>`_.
  By default reports are not included.

The following example call makes a query for one test session, choosing to also return its detailed log:

.. code-block:: json

  {
    "session": ["08e49917-d560-4ffb-bbf5-280bf1084148"],
    "withLogs": true
  }

As a response for the **status** operation, the test bed returns the latest information for the requested sessions in an array named ``sessions``.
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
(click :download:`here<../testHistory/resources/test_case_report.xml>` for a complete XML report sample).

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

The payload of the **status** operation's request is defined by the following :download:`JSON Schema<resources/sessions/status_request.schema.json>`:

.. literalinclude:: resources/sessions/status_request.schema.json
   :language: json

.. _api__test_sessions__status__response:

status - response schema
++++++++++++++++++++++++

The payload of the **status** operation's response is defined by the following :download:`JSON Schema<resources/sessions/status_response.schema.json>`:

.. literalinclude:: resources/sessions/status_response.schema.json
   :language: json

.. _api__test_sessions__stop:

stop
~~~~

The **stop** operation is used to forcibly terminate one or more specific test sessions. It can be used with any test session, not only
sessions launched via the test bed's REST API, as long as you are authorised to view them.

To call the **stop** operation make an HTTP ``POST`` to path ``/api/rest/tests/stop``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/tests/stop``.

As with all test bed REST operations for session management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

In the request's payload you are expected to provide an array named ``session``, including the session identifiers for one or more test sessions 
you want to stop. In the following example, a request is being made to terminate two test sessions:

.. code-block:: json

  {
    "session": ["08e49917-d560-4ffb-bbf5-280bf1084148", "a866297c-ccb0-4133-9ae9-2c3af7aba0bd"]
  }

Once this call is made, the test bed will immediately terminate the requested test sessions. The response to the **stop** operation has an
empty body and is returned with a ``200`` (ok) status code.

.. _api__test_sessions__stop__request:

stop - request schema
+++++++++++++++++++++

The payload of the **stop** operation's request is defined by the following :download:`JSON Schema<resources/sessions/stop_request.schema.json>`:

.. literalinclude:: resources/sessions/stop_request.schema.json
   :language: json

.. _api__test_sessions__report:

report
~~~~~~

The **report** operation is used to retrieve a test session's XML report expressed in the `GITB Test Reporting Language (GITB TRL) <https://www.itb.ec.europa.eu/docs/tdl/latest/introduction/index.html#specification-links>`_.
It can be used with any test session, not only sessions launched via the test bed's REST API, as long as you are authorised to view them.

To call the **report** operation make an HTTP ``GET`` to path ``/api/rest/tests/report/{sessionId}``, where ``sessionId`` is replaced by the session's identifier.
As an example, for the `DIGIT instance`_, the path for a session with an identifier of "ABC123" would be ``https://www.itb.ec.europa.eu/itb/api/rest/tests/report/ABC123``.

As with all test bed REST operations for session management you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **organisation API key**.

Once this call is made, the test bed will return a response with a ``200`` (ok) status code, whose payload is the report's XML content. The following sample is a complete 
example of such a report:

.. literalinclude:: ../testHistory/resources/test_case_report.xml
   :language: xml

.. _api__test_suites:

Test suite management
---------------------

The test bed foresees API operations to **deploy** and **undeploy** test suites. Managing test suites in this way is primarily used during **test suite development**, 
to allow the deployment of test suites via automation processes.

Test suite management operations make use of API keys to determine the information relevant to a specific call. These keys are:

* The key to identify a **specification**, displayed when :ref:`viewing a specification's details<domains__specification>`.
* The identifier of a **test suite**, displayed when :ref:`viewing a test suite's details<domains__test_suite_details>`.

The API includes two operations that allow you to manage test suites:

* :ref:`deploy<api__test_suites__deploy>`: Deploy a (non-shared) test suite to a specification.
* :ref:`undeploy<api__test_suites__undeploy>`: Remove a (non-shared) test suite from a specification.
* :ref:`deployShared<api__test_suites__deployShared>`: Deploy a shared test suite to a community's domain.
* :ref:`undeployShared<api__test_suites__undeployShared>`: Remove a shared test suite from a community's domain.
* :ref:`linkShared<api__test_suites__linkShared>`: Link a shared test suite to one or more specifications.
* :ref:`unlinkShared<api__test_suites__unlinkShared>`: Unlink a shared test suite from one or more specifications.

Details on each operation, including sample requests and responses, are provided in the following sections.

.. _api__test_suites__deploy:

deploy
~~~~~~

The **deploy** operation is used to add a new or updated test suite to a specification. Apart from providing the test suite itself, the operation's
parameters allow you to specify how to handle validation issues and existing conformance tests.

To call the **deploy** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/deploy``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/testsuite/deploy``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define at least the following information:

* The ``specification``, referring to the API key of the specification to be updated.
* The ``testSuite``, including the data of the test suite archive being deployed.

Apart from these properties, you may optionally specify additional properties as boolean flags to determine archive handling options. Specifically:

* Set ``ignoreWarnings`` to ``true`` to allow the test suite's deployment even in case of validation warnings. By default validation warnings will prevent the deployment
  from completing.
* Set ``replaceTestHistory`` to ``true`` to clear any existing conformance testing history relevant to the test suite. By default existing tests are maintained.
* Set ``updateSpecification`` to ``true`` to update existing specification metadata to values provided in the test suite archive. By default existing information will not
  be updated.

In addition to the above properties, you may also specify an array named ``testCases`` that provides fine-grained instructions on how to handle the test suite's
test cases if these are found to already exist. For test cases not specified in this way, or if the ``testCases`` array is altogether missing, the values provided
in ``replaceTestHistory`` and ``updateSpecification`` are treated as the defaults. The items of the ``testCases`` array define the following properties:

* ``identifier``, referring to the identifier of the test case.
* ``updateSpecification``, which can be set to ``true`` to update the test case's metadata (name and description).
* ``replaceTestHistory``, which can be set to ``true`` to reset the testing history for the test case.

The **deploy** operation actually comes with two variants to allow you to provide the test suite archive in the way that best fits your needs. The selected
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

The following sample is a JSON request to deploy a test suite to a specification (the test suite's BASE64 encoded string is truncated for brevity).

.. code-block:: json

  {
    "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

As discussed earlier you may also include additional flags to determine how the upload should be handled. The following example includes the
``ignoreWarnings``, ``replaceTestHistory`` and ``updateSpecification`` flags to override the default behaviours.

.. code-block:: json

  {
    "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "ignoreWarnings": true,
    "replaceTestHistory": true,
    "updateSpecification": true,
    "testSuite": "UEsDBBQAAAAIAIWIr...wNAAAAAA=="
  }

For the full specification of the **deploy** operation's request payload, when this is provided as JSON, you may check its :ref:`JSON schema definition<api__test_suites__deploy__request>`.

Once the **deploy** operation has completed you receive a JSON response to notify you of the deployment's result. This response will always include 
a boolean ``completed`` flag to inform you whether the deployment was actually carried out. Alongside this you may optionally receive report items
produced by the test suite's validation in three arrays named ``errors``, ``warnings`` and ``messages``. Each item of these arrays includes the finding's ``description``
and ``location``, the latter being the path of the test suite's resource (e.g. a test case file) that resulted in it being reported. A test suite's
deployment may not be completed in case it's validation produced errors or warnings (that were not set to be ignored via the request's ``ignoreWarnings`` flag).

The following example presents a response that produced a validation warning but was nonetheless completed:

.. code-block:: json

  {
    "completed": true,
    "warnings": [
      {
        "description": "[TDL-015] Actor [Actor4] is not referenced in any test cases."
      }
    ]
  }

For the full specification of the **deploy** operation's response payload you may check its :ref:`JSON schema definition<api__test_suites__deploy__response>`.

.. _api__test_suites__deploy__request:

deploy - request schema (JSON case)
+++++++++++++++++++++++++++++++++++

The payload of the **deploy** operation's request (in the case it submitted as JSON content) is defined by the following :download:`JSON Schema<resources/suites/deploy_request.schema.json>`:

.. literalinclude:: resources/suites/deploy_request.schema.json
   :language: json

.. _api__test_suites__deploy__response:

deploy - response schema
++++++++++++++++++++++++

The payload of the **deploy** operation's response is defined by the following :download:`JSON Schema<resources/suites/deploy_response.schema.json>`:

.. literalinclude:: resources/suites/deploy_response.schema.json
   :language: json

.. _api__test_suites__undeploy:

undeploy
~~~~~~~~

The **undeploy** operation is used to remove a test suite from a specification. Removing a test suite will result in the relevant conformance testing
history being cleared.

To call the **undeploy** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/undeploy``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/testsuite/undeploy``. To authorise the operation and identify the specification domain
from which the test suite will be removed, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define the following two properties:

* The ``specification``, referring to the API key of the specification to be updated.
* The ``testSuite``, referring to the identifier of the test suite to be removed.

The following sample is a request to remove a test suite from a specification.

.. code-block:: json

  {
    "specification": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "testSuite": "test_suite_1"
  }

Once this call is made, the test bed will remove the specified test suite and clear any related conformance tests. The response to the **undeploy** operation has an
empty body and is returned with a ``200`` (ok) status code.

.. _api__test_suites__undeploy__request:

undeploy - request schema
+++++++++++++++++++++++++

The payload of the **undeploy** operation's request is defined by the following :download:`JSON Schema<resources/suites/undeploy_request.schema.json>`:

.. literalinclude:: resources/suites/undeploy_request.schema.json
   :language: json

.. _api__test_suites__deployShared:

deployShared
~~~~~~~~~~~~

The **deployShared** operation is used to add a new or updated test suite to a domain to be shared across multiple specifications. Apart from providing the test suite itself, the operation's
parameters allow you to specify how to handle validation issues and existing conformance tests.

To call the **deployShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/deployShared``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/testsuite/deployShared``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

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

The following example presents a response that produced a validation warning but was nonetheless completed:

.. code-block:: json

  {
    "completed": true,
    "warnings": [
      {
        "description": "[TDL-015] Actor [Actor4] is not referenced in any test cases."
      }
    ]
  }

For the full specification of the **deployShared** operation's response payload you may check its :ref:`JSON schema definition<api__test_suites__deployShared__response>`.

.. _api__test_suites__deployShared__request:

deployShared - request schema (JSON case)
+++++++++++++++++++++++++++++++++++++++++

The payload of the **deployShared** operation's request (in the case it submitted as JSON content) is defined by the following :download:`JSON Schema<resources/suites/deployShared_request.schema.json>`:

.. literalinclude:: resources/suites/deployShared_request.schema.json
   :language: json

.. _api__test_suites__deployShared__response:

deployShared - response schema
++++++++++++++++++++++++++++++

The payload of the **deployShared** operation's response is defined by the following :download:`JSON Schema<resources/suites/deployShared_response.schema.json>`:

.. literalinclude:: resources/suites/deployShared_response.schema.json
   :language: json

.. _api__test_suites__undeployShared:

undeployShared
~~~~~~~~~~~~~~

The **undeployShared** operation is used to remove a shared test suite from a domain. Removing a test suite will result in the relevant conformance testing
history being cleared.

To call the **undeployShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/undeployShared``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/testsuite/undeployShared``. To authorise the operation and identify the domain
from which the test suite will be removed, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define the ``testSuite`` property, referring to the identifier of the test suite to be removed. 
The following sample is a request to remove a test suite from a specification.

.. code-block:: json

  {
    "testSuite": "test_suite_1"
  }

Once this call is made, the test bed will remove the specified test suite and clear any related conformance tests. The response to the **undeployShared** operation has an
empty body and is returned with a ``200`` (ok) status code.

.. _api__test_suites__undeployShared__request:

undeployShared - request schema
+++++++++++++++++++++++++++++++

The payload of the **undeployShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/undeployShared_request.schema.json>`:

.. literalinclude:: resources/suites/undeployShared_request.schema.json
   :language: json

.. _api__test_suites__linkShared:

linkShared
~~~~~~~~~~

The **linkShared** operation is used to link a shared test suite to one or more specifications.

To call the **linkShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/linkShared``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/testsuite/linkShared``. To authorise the operation and identify the specification domain
to be updated, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

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

The payload of the **linkShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/linkShared_request.schema.json>`:

.. literalinclude:: resources/suites/linkShared_request.schema.json
   :language: json

.. _api__test_suites__linkShared__response:

linkShared - response schema
++++++++++++++++++++++++++++

The payload of the **linkShared** operation's response is defined by the following :download:`JSON Schema<resources/suites/linkShared_response.schema.json>`:

.. literalinclude:: resources/suites/linkShared_response.schema.json
   :language: json

.. _api__test_suites__unlinkShared:

unlinkShared
~~~~~~~~~~~~

The **unlinkShared** operation is used to remove the link between a shared test suite and one or more specifications. Note that removing such a link has no effect
on existing test sessions but will remove the test suite from relevant conformance statements.

To call the **unlinkShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/unlinkShared``. As an example, for the `DIGIT instance`_,
the path would be ``https://www.itb.ec.europa.eu/itb/api/rest/testsuite/unlinkShared``. To authorise the operation and identify the domain that
contains the test suite and specifications, you must include in your request an HTTP header named ``ITB_API_KEY`` set to your **community API key**.

In the request's payload you will need to define the following two properties:

* The ``testSuite``, referring to the identifier of the test suite to be removed.
* The ``specifications`` array, including as string values the API keys of the target specifications.

The following sample is a request to unlink a test suite from a specification.

.. code-block:: json

  {
    "testSuite": "test_suite_1"
    "specifications": [ "B277E210X2FB4X4BD7X88B6X951504F45F8F" ]
  }

Once this call is made, the test bed will unlink the specified test suite from the specification(s). The response has an empty body and is returned with a ``200`` (ok) status code.

.. _api__test_suites__unlinkShared__request:

unlinkShared - request schema
+++++++++++++++++++++++++++++

The payload of the **unlinkShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/unlinkShared_request.schema.json>`:

.. literalinclude:: resources/suites/unlinkShared_request.schema.json
   :language: json

.. _api__openapi:

OpenAPI documentation
---------------------

The test bed's REST API is also documented using the standard `OpenAPI specification <https://swagger.io/specification/>`_. You may 
download this from :download:`here <resources/openapi.json>`, or access it live from the test bed from path ``/api/rest``. On a typical 
`developer instance <https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBed/>`_ this would be available at ``http://localhost:9000/api/rest``.

The API's documentation does not only provide a standardised representation of its operations. It also allows it to be imported into 
tools that can process it to generate **code**, **documentation** and even **call the live services**.

An example of a popular, free and open-source tool for this purpose is the `Swagger UI <https://swagger.io/tools/swagger-ui/>`_ 
which provides a full user interface to explore and use an API. This can either be downloaded or used directly from the cloud.
If you use `Docker <https://www.docker.com/>`_ and have it installed on your workstation you can get it up and running by issuing:

.. code-block:: none
  
  docker pull swaggerapi/swagger-ui
  docker run -p 80:8080 swaggerapi/swagger-ui

Executing the above two commands will download and launch Swagger UI, making it available at ``http://localhost``. Accessing this
you may now view and use the test bed's REST API:

.. figure:: ../screenshots/swagger-ui.png
  :align: center

.. _AUTOMATION_API_ENABLED: https://www.itb.ec.europa.eu/docs/guides/latest/installingTheTestBedProduction/index.html#configuration-properties
.. _DIGIT instance: https://www.itb.ec.europa.eu/itb/