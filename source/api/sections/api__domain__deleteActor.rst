The **deleteActor** operation is used to delete an existing actor. To use it make an HTTP ``DELETE`` to path ``/api/rest/actor/{actor}``,
setting ``{actor}`` to the target actor's API key. In addition, you must include in your request an HTTP header named
``ITB-API-KEY`` set to a **community API key**. This API key identifies the community that is able to manage the actor's domain, either by
being directly linked to it or being linked to no domain.

This operation takes no payload when making a request. If the target actor has been successfully deleted, it will respond with an
empty body and a status of ``200`` (OK) to signal that the deletion was successful.
