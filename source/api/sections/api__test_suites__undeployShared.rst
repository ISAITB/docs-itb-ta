The **undeployShared** operation is used to remove a shared test suite from a domain. Removing a test suite will result in the relevant conformance testing
history being cleared.

To call the **undeployShared** operation make an HTTP ``POST`` to path ``/api/rest/testsuite/undeployShared``. To authorise the operation and identify the domain
from which the test suite will be removed, you must include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's payload you will need to define the ``testSuite`` property, referring to the identifier of the test suite to be removed.
The following sample is a request to remove a test suite from a specification.

.. code-block:: json

  {
    "testSuite": "test_suite_1"
  }

Once this call is made, the Test Bed will remove the specified test suite and clear any related conformance tests. The response to the **undeployShared** operation has an
empty body and is returned with a ``200`` (OK) status code.

.. _api__test_suites__undeployShared__request:

undeployShared - request schema
+++++++++++++++++++++++++++++++

The payload of the **undeployShared** operation's request is defined by the following :download:`JSON Schema<resources/suites/undeployShared_request.schema.json>`:

.. literalinclude:: resources/suites/undeployShared_request.schema.json
   :language: json
