import { ActionContainer, Card } from "@componlyco/berkoukes";
import { Container, render, Text } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

function Plugin() {
  return (
    <Container>
      <div
        style={{
          height: "50vh",
          width: "50vw",
        }}
      >
        <Card />
      </div>
    </Container>
  );
}

export default render(Plugin);
