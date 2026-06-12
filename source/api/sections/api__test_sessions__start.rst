The **start** operation is used to launch one or more test sessions. You may use the operation's parameters to specify exactly which test cases
to execute, allowing for targetted choices or batch execution of complete sets of tests. You may also define how the selected test cases are
launched, by specifying whether they should be parallelised or executed in sequence. In addition, you may provide inputs for the tests to execute
that could serve to replace values that would be otherwise provided interactively (e.g. user inputs or uploaded files).

To call the **start** operation make an HTTP ``POST`` to path ``/api/rest/tests/start``. As with all Test Bed REST operations for session
management you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **organisation API key**.

In the request's payload you typically define at least the following properties:

* The ``system``, referring to the API key of the system to be tested. This can be skipped in case the target organisation defines a single system.
* The ``actor``, referring to the API key for the target actor. This can be skipped in case you prefer providing test suite and/or test case identifiers
  to match the target actor. In any case a single conformance statement must be matched based on the provided inputs.

The operation supports properties ``testSuite`` and ``testCase``, both provided as arrays including the API keys for specific test suites
and test cases. These properties, in combination with the ``actor``, define which test cases shall be executed.
For example the following request defines only the ``actor``, thus launching all test cases defined in the system's
:ref:`conformance statement<manage_your_conformance_statements__view_a_conformance_statements_details__tests>`:

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7"
  }

Including in addition the ``testSuite`` property will instruct the Test Bed to launch the test cases defined in that specific test suite(s):

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

Apart from selecting the test cases to launch, you may also specify property ``forceSequentialExecution`` to inform the Test Bed how the
test sessions should be launched. Setting this to ``true`` will force the Test Bed to launch all tests sequentially. By default, this is
considered as ``false``, meaning that the Test Bed will launch all test sessions in parallel, unless certain of the selected test cases
require sequential execution.

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "forceSequentialExecution": true
  }

When multiple test sessions are to be launched you can also specify the ``executionDelay`` property, providing a number
representing the delay in milliseconds to apply between each test execution. This delay applies regardless
of whether execution is sequential or parallel. Providing a negative value or zero is equivalent to no delay being applied.

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "executionDelay": 5000
  }

By default the ``start`` call  immediately returns after having launched its test sessions. In case you need to take certain actions only
**once the launched test sessions are completed**, you can set the ``waitForCompletion`` flag to ``true``. Doing so the Test Bed will monitor the
status of the launched sessions, and will produce a response only once all of them are completed. To avoid pending indefinitely for long-running
sessions, the Test Bed will wait by default for 30 seconds, however you can override this by using the ``maximumWaitTime`` parameter and
specifying the number of milliseconds to consider as the maximum wait time. The response to the ``start`` operation that included such
monitoring will also include in the response a ``completed`` boolean flag per test session to inform the caller on whether the session was known
to have completed.

.. code-block:: json

  {
    "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
    "actor": "28E6E6C9X80BDX40C9XB54DX102800BC32D7",
    "waitForCompletion": true,
    "maximumWaitTime": 60000
  }

.. note::
  **Using the REST API in scripting:** When using scripts or automation processes to trigger tests, using ``waitForCompletion`` can greatly simplify
  your implementation, as you can know when sessions complete without using polling.

As a complement to the specifying which tests are to be launched and how, you may also provide one or more **inputs** for the selected test cases.
These inputs will be added to the test session context before executing each test, overriding any variables defined with default values.
Providing inputs can be very useful allowing you to execute tests that would otherwise require user interactions (which in this case will be skipped).

.. note::
    **Declaring input variables in test cases:** If you design your test cases based on REST API inputs you will also
    need to declare the inputs as `test case variables <https://www.itb.ec.europa.eu/docs/tdl/latest/testcase/index.html#variables>`__.

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
In case your ``start`` call specified ``waitForCompletion`` as ``true`` with a
``maximumWaitTime``, each returned test session information will include a ``completed`` flag to inform you whether it was known to have completed
within the specified delay.

.. code-block:: json

  {
    "createdSessions": [
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC1",
        "session": "63b76ce6-5ade-431f-8620-8dadb13d2f42",
        "completed": true
      },
      {
        "testSuite": "TS1",
        "testCase": "TS1_TC2",
        "session": "a866297c-ccb0-4133-9ae9-2c3af7aba0bd",
        "completed": false
      }
    ]
  }

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
