"use client";

import { useEffect } from "react";

/**
 * Google Translate rewrites the live DOM (wraps text nodes in <font> tags)
 * outside React's control. When React later reconciles that same subtree
 * (e.g. on client-side navigation), removeChild/insertBefore can throw
 * "NotFoundError: node is not a child" because the node Google moved no
 * longer matches what React expects. This patches both methods to no-op
 * instead of throwing when the node isn't actually a child — a narrowly
 * scoped, widely used workaround for React + Google Translate coexistence.
 */
export function DomPatchForTranslate() {
  useEffect(() => {
    const nodeProto = Node.prototype as unknown as {
      removeChild<T extends Node>(this: Node, child: T): T;
      insertBefore<T extends Node>(
        this: Node,
        newNode: T,
        referenceNode: Node | null,
      ): T;
    };

    const originalRemoveChild = nodeProto.removeChild;
    const originalInsertBefore = nodeProto.insertBefore;

    nodeProto.removeChild = function <T extends Node>(this: Node, child: T) {
      if (child.parentNode !== this) return child;
      return originalRemoveChild.call(this, child) as T;
    };

    nodeProto.insertBefore = function <T extends Node>(
      this: Node,
      newNode: T,
      referenceNode: Node | null,
    ) {
      if (referenceNode && referenceNode.parentNode !== this) return newNode;
      return originalInsertBefore.call(this, newNode, referenceNode) as T;
    };

    return () => {
      nodeProto.removeChild = originalRemoveChild;
      nodeProto.insertBefore = originalInsertBefore;
    };
  }, []);

  return null;
}
