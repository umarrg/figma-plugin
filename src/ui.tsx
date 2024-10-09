import { ActionContainer, Card } from "@componlyco/berkoukes";
import { Container, Text } from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from 'preact';
import { render } from 'preact'; // Ensure you're using Preact's render method
import { useCallback, useState } from "preact/hooks";

function Plugin() {
  return (
    <Container space="medium">
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

render(<Plugin />, document.body);  
