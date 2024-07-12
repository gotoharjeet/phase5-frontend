import java.awt.AlphaComposite;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class BrandNameImage {
    public static void main(String[] args) {
        try {
            // Define image size
            int width = 500;
            int height = 300;

            // Create a BufferedImage object
            BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);

            // Get the graphics context
            Graphics2D g2d = bufferedImage.createGraphics();

            // Set the background to transparent
            g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.CLEAR));
            g2d.fillRect(0, 0, width, height);
            g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER));

            // Load the logo image
            BufferedImage logo = ImageIO.read("../img/brands/"theashok-logo.png"));

            // Calculate the position to center the logo
            int logoWidth = logo.getWidth();
            int logoHeight = logo.getHeight();
            int logoX = (width - logoWidth) / 2;
            int logoY = (height - logoHeight) / 2;

            // Draw the logo
            g2d.drawImage(logo, logoX, logoY, null);

            // Dispose of the graphics context and release resources
            g2d.dispose();

            // Save the image as a PNG file
            File file = new File("centered_logo.png");
            ImageIO.write(bufferedImage, "png", file);
            System.out.println("Image saved as centered_logo.png");

        } catch (IOException e) {
            e.printStackTrace(); // Handle the IOException here
        }
    }
}

