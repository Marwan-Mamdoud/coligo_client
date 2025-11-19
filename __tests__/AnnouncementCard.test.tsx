import { render, screen } from "@testing-library/react";
import AnnouncementCard from "../src/Components/Announcements/Announcemnt_card";

describe("AnnouncementCard Component", () => {
  test("renders description, user and category correctly", () => {
    render(
      <AnnouncementCard
        link="/test-link"
        user="Events Manager"
        desc="Test Description"
        image="test-image.jpg"
        category="Category 1"
      />
    );

    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByText("Events Manager")).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();
  });
});
