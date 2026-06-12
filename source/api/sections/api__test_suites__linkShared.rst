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

The payload of the **linkShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/linkShared_request.schema.json>`:

.. literalinclude:: resources/suites/linkShared_request.schema.json
   :language: json

.. _api__test_suites__linkShared__response:

linkShared - response schema
++++++++++++++++++++++++++++

The payload of the **linkShared** operation's response is defined by the following :download:`JSON Schema<resources/suites/linkShared_response.schema.json>`:

.. literalinclude:: resources/suites/linkShared_response.schema.json
   :language: json
