import { Button, Flex, Input, Select, Title } from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Title order={4}>Recipe Search & Filter</Title>

      <div className="bg-white p-2 rounded-md">
        <Input placeholder="Search for a recipe" mb="md" mt="md" />

        <Flex w={"100%"} gap={10} mt="sm">
          <Select
            label="Cuisine Type"
            w={"100%"}
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />

          <Select
            label="Diet Restrictions"
            w={"100%"}
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />

          <Select
            label="Preparation Time"
            w={"100%"}
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
          />
        </Flex>

        <Button variant="filled" color="dark" mt={"sm"}>
          Search
        </Button>
      </div>
    </div>
  );
}
