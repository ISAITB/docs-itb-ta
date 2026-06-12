The **create** operation is used to create a conformance statement for an organisation, linking one of its systems with a specification
actor. To call the operation make an HTTP ``PUT`` to path ``/api/rest/conformance/{system}/{actor}`` setting the path placeholders as follows:

* For ``{system}`` use the API key of the system you want to create the statement for.
* For ``{actor}`` use the API key of the specification actor.

In addition, you must include in your request an HTTP header named ``ITB-API-KEY`` set with the **organisation's API key**. Finally, note that
this operation does not take a body.

As an example, if we want to create a conformance statement linking a system and actor with API keys ``SYSTEM123`` and ``ACTOR456`` you
would make a ``PUT`` to ``/api/rest/conformance/SYSTEM123/ACTOR456``. In terms of response, if the conformance statement was successfully
created you will receive a ``200`` response with no body.
